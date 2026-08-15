import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { uploadImage } from "./uploadImage";

export const updateProject = async ({
  githubUrl,
  image,
  tags,
  title,
  hasTags,
  longDescription,
  shortDescription,
  id,
  imgUrl: existingImgUrl,
}) => {
  // `image` is a File object only when the user uploads a new file.
  // In the edit modal it is null when no file is selected, so we must keep the previous image.
  const imgUrl = image ? await uploadImage(image) : existingImgUrl;

  await updateDoc(doc(db, "projects", id), {
    githubUrl,
    title,
    tags,
    hasTags,
    imgUrl,
    longDescription,
    shortDescription,
    isDeleted: false,
    updatedAt: serverTimestamp(),
  });
};

export const updateCaseStudies = async ({
  githubUrl,
  image,
  tags,
  title,
  hasTags,
  longDescription,
  shortDescription,
  id,
  imgUrl: existingImgUrl,
}) => {
  // A new File only exists when the user selects an image in the edit modal.
  // Otherwise `image` is undefined, so we keep the previous Cloudinary URL instead of uploading nothing.
  const imgUrl = image ? await uploadImage(image) : existingImgUrl;

  await updateDoc(doc(db, "case-studies", id), {
    githubUrl,
    title,
    tags,
    hasTags,
    imgUrl,
    longDescription,
    shortDescription,
    isDeleted: false,
    updatedAt: serverTimestamp(),
  });
};

export const updateContent = async ({
  githubUrl,
  image,
  tags,
  title,
  hasTags,
  longDescription,
  shortDescription,
  id,
  imgUrl: existingImgUrl,
}) => {
  // `image` is null/undefined unless the user uploads a replacement.
  // In that case, we must preserve the existing image URL rather than sending an invalid upload request.
  const imgUrl = image ? await uploadImage(image) : existingImgUrl;

  await updateDoc(doc(db, "content", id), {
    githubUrl,
    title,
    imgUrl,
    longDescription,
    shortDescription,
    isDeleted: false,
    updatedAt: serverTimestamp(),
  });
};
