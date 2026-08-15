import { collection, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const updateProject = async ({
  githubUrl,
  image,
  tags,
  title,
  hasTags,
  longDescription,
  shortDescription,
  id,
}) => {
  const imgUrl = await uploadImage(image);

  await updateDoc(collection(db, "projects", id), {
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
}) => {
  const imgUrl = await uploadImage(image);

  await updateDoc(collection(db, "case-studies", id), {
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
}) => {
  const imgUrl = await uploadImage(image);

  await updateDoc(collection(db, "content", id), {
    githubUrl,
    title,
    imgUrl,
    longDescription,
    shortDescription,
    isDeleted: false,
    updatedAt: serverTimestamp(),
  });
};
