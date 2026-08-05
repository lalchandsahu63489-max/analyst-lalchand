import { Formik, Form, Field, ErrorMessage } from "formik";
import Container from "../../components/ui/Container";
import {
  contactInfoCards,
  availabilityItems,
  projectTypeOptions,
  contactValidationSchema,
  contactInitialValues,
} from "../../constants/contact";

const inputClasses =
  "w-full bg-(--color-background-elevated) border border-(--color-border) rounded-lg px-3.5 py-3 text-(--color-text) text-sm focus:outline-2 focus:outline-(--color-accent) focus:outline-offset-1 focus:border-(--color-accent)";

const ContactInfoCard = ({ icon: Icon, title, detail }) => (
  <div className="border-border bg-surface hover:border-primary-light mb-3.5 flex items-center gap-3.5 rounded-xl border px-5 py-4.5 transition-transform duration-150 hover:translate-x-1">
    <div className="bg-primary/14 text-primary-light flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]">
      <Icon size={18} />
    </div>
    <div>
      <h5 className="font-display text-text text-[14.5px]">{title}</h5>
      <span className="text-text-muted text-[12.5px]">{detail}</span>
    </div>
  </div>
);

const FieldError = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => <p className="mt-1 text-[11.5px] text-red-400">{msg}</p>}
  </ErrorMessage>
);

const Contact = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submmited with data ", values);
    resetForm();
  };

  return (
    <section id="contact" data-reveal>
      <Container>
        <div className="mx-auto mb-14 max-w-160 text-center">
          <span className="text-accent mb-3.5 inline-block font-mono text-xs tracking-widest uppercase">
            // Get In Touch
          </span>
          <h2 className="font-display text-text mb-3.5 text-4xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-text-muted text-[15.5px]">
            Have a project, opportunity or idea? Let's connect and create
            something valuable with data.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            {contactInfoCards.map((card) => (
              <ContactInfoCard key={card.title} {...card} />
            ))}

            <div className="border-border bg-surface mt-5 rounded-xl border p-5">
              <h5 className="text-text-muted mb-3 font-mono text-[12.5px] tracking-[0.06em]">
                CURRENTLY AVAILABLE FOR
              </h5>
              {availabilityItems.map((item) => (
                <div
                  key={item}
                  className="text-text mb-2 flex items-center gap-2 text-[13.5px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  {item}
                </div>
              ))}
              <div className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-green-400/35 bg-green-400/8 px-3.5 py-1.5 font-mono text-xs text-green-400">
                <span className="h-1.75 w-1.75 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_var(--color-green-400)]" />
                Open to opportunities
              </div>
            </div>
          </div>

          <div className="border-border bg-surface rounded-2xl border p-8">
            <h3 className="font-display text-text mb-5 text-[19px]">
              Send Me A Message
            </h3>

            <Formik
              initialValues={contactInitialValues}
              validationSchema={contactValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-text-muted mb-1.5 block font-mono text-[11.5px]"
                    >
                      Full Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className={inputClasses}
                    />
                    <FieldError name="name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-text-muted mb-1.5 block font-mono text-[11.5px]"
                    >
                      Email Address
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className={inputClasses}
                    />
                    <FieldError name="email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="text-text-muted mb-1.5 block font-mono text-[11.5px]"
                    >
                      Company
                    </label>
                    <Field
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company name (optional)"
                      className={inputClasses}
                    />
                    <FieldError name="company" />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="text-text-muted mb-1.5 block font-mono text-[11.5px]"
                    >
                      Project Type
                    </label>
                    <Field
                      as="select"
                      id="projectType"
                      name="projectType"
                      className={inputClasses}
                    >
                      {projectTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <FieldError name="projectType" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-text-muted mb-1.5 block font-mono text-[11.5px]"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Tell me about your requirement"
                    rows={4}
                    className={`${inputClasses} min-h-25 resize-y`}
                  />
                  <FieldError name="message" />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary justify-center"
                >
                  Send Message →
                </button>
                <p className="text-text-muted -mt-1.5 text-xs">
                  Note: connect this form to Formspree / EmailJS to actually
                  receive messages.
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
