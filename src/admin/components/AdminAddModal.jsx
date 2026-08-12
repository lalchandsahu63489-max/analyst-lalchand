import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiX, FiPlus, FiUploadCloud } from "react-icons/fi";

const inputClasses =
  "w-full bg-background-elevated border-border rounded-lg border px-3.5 py-3 text-sm text-text focus:outline-2 focus:outline-accent focus:outline-offset-1 focus:border-accent";

const FieldError = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => <p className="mt-1 text-[11.5px] text-red-400">{msg}</p>}
  </ErrorMessage>
);

const validationSchema = Yup.object({
  title: Yup.string().trim().required("Title is required"),
  shortDescription: Yup.string()
    .trim()
    .required("Short description is required"),
  longDescription: Yup.string().trim().required("Long description is required"),
  githubUrl: Yup.string().trim().url("Enter a valid URL"),
  hasTags: Yup.boolean(),
  tags: Yup.array().when("hasTags", {
    is: true,
    then: (schema) => schema.min(1, "Add at least one tag"),
  }),
});

const initialValues = {
  title: "",
  shortDescription: "",
  longDescription: "",
  githubUrl: "",
  hasTags: true,
  tags: [],
  image: null,
};

const AdminAddModal = ({ isOpen, onClose, onSubmit }) => {
  const [tagInput, setTagInput] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  if (!isOpen) return null;

  const handleAddTag = (values, setFieldValue) => {
    const trimmed = tagInput.trim();
    if (trimmed && !values.tags.includes(trimmed)) {
      setFieldValue("tags", [...values.tags, trimmed]);
    }
    setTagInput("");
  };

  const handleRemoveTag = (values, setFieldValue, tag) => {
    setFieldValue(
      "tags",
      values.tags.filter((t) => t !== tag),
    );
  };

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFieldValue("image", file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleClose = () => {
    setTagInput("");
    setImagePreview(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-200 flex items-start justify-center overflow-y-auto bg-black/75 p-6 backdrop-blur-sm md:p-10">
      <div className="bg-surface border-border relative w-full max-w-xl rounded-2xl border p-7 md:p-8">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="border-border bg-background-elevated text-text-muted hover:text-text hover:border-accent absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border"
        >
          <FiX size={16} />
        </button>

        <h3 className="font-display text-text mb-6 text-xl">Add New Item</h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
            setImagePreview(null);
            onClose();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="flex flex-col gap-4" noValidate>
              <div>
                <label
                  htmlFor="title"
                  className="text-text-muted mb-1.5 block font-mono text-[11.5px]"
                >
                  Title
                </label>
                <Field
                  id="title"
                  name="title"
                  placeholder="Enter title"
                  className={inputClasses}
                />
                <FieldError name="title" />
              </div>

              <div>
                <label
                  htmlFor="shortDescription"
                  className="text-text-muted mb-1.5 block font-mono text-[11.5px]"
                >
                  Short Description
                </label>
                <Field
                  id="shortDescription"
                  name="shortDescription"
                  placeholder="One-line summary shown on cards"
                  className={inputClasses}
                />
                <FieldError name="shortDescription" />
              </div>

              <div>
                <label
                  htmlFor="longDescription"
                  className="text-text-muted mb-1.5 block font-mono text-[11.5px]"
                >
                  Long Description
                </label>
                <Field
                  as="textarea"
                  id="longDescription"
                  name="longDescription"
                  rows={4}
                  placeholder="Full details shown in the detail view"
                  className={`${inputClasses} min-h-25 resize-y`}
                />
                <FieldError name="longDescription" />
              </div>

              <div>
                <label
                  htmlFor="githubUrl"
                  className="text-text-muted mb-1.5 block font-mono text-[11.5px]"
                >
                  GitHub URL <span className="text-text-muted">(optional)</span>
                </label>
                <Field
                  id="githubUrl"
                  name="githubUrl"
                  placeholder="https://github.com/..."
                  className={inputClasses}
                />
                <FieldError name="githubUrl" />
              </div>

              <div>
                <label className="text-text flex w-fit cursor-pointer items-center gap-2.5 text-sm">
                  <Field
                    type="checkbox"
                    name="hasTags"
                    className="h-4 w-4 accent-current"
                  />
                  This item supports tags
                </label>
              </div>

              {values.hasTags && (
                <div>
                  <label className="text-text-muted mb-1.5 block font-mono text-[11.5px]">
                    Tags
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTag(values, setFieldValue);
                        }
                      }}
                      placeholder="Type a tag and press Enter"
                      className={inputClasses}
                    />
                    <button
                      type="button"
                      onClick={() => handleAddTag(values, setFieldValue)}
                      className="border-border text-text-muted hover:text-accent hover:border-accent flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border"
                      aria-label="Add tag"
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>
                  {values.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {values.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-accent bg-primary/14 flex items-center gap-1.5 rounded-md py-0.5 pr-1.5 pl-2.5 font-mono text-[10.5px]"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveTag(values, setFieldValue, tag)
                            }
                            aria-label={`Remove ${tag}`}
                            className="hover:text-red-400"
                          >
                            <FiX size={11} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <FieldError name="tags" />
                </div>
              )}

              <div>
                <label className="text-text-muted mb-1.5 block font-mono text-[11.5px]">
                  Image
                </label>
                <label
                  htmlFor="image"
                  className="border-border hover:border-accent text-text-muted hover:text-accent flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed py-6 transition-colors duration-150"
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-24 rounded-md object-cover"
                    />
                  ) : (
                    <>
                      <FiUploadCloud size={22} />
                      <span className="text-xs">Click to upload an image</span>
                    </>
                  )}
                </label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setFieldValue)}
                  className="hidden"
                />
              </div>

              <div className="mt-2 flex gap-3">
                <button
                  type="submit"
                  className="btn btn-primary flex-1 justify-center"
                >
                  Add Item
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminAddModal;
