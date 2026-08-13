import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { uploadImage } from "./uploadImage";

export const addProject = async ({
  githubUrl,
  image,
  tags,
  title,
  hasTags,
  longDescription,
  shortDescription,
}) => {
  const imgUrl = await uploadImage(image);

  await addDoc(collection(db, "projects"), {
    githubUrl,
    title,
    tags,
    hasTags,
    imgUrl,
    longDescription,
    shortDescription,
    isDeleted: false,
    createdAt: serverTimestamp(),
  });
};

export const addCaseStudies = async ({
  githubUrl,
  image,
  tags,
  title,
  hasTags,
  longDescription,
  shortDescription,
}) => {
  const imgUrl = await uploadImage(image);

  await addDoc(collection(db, "case-studies"), {
    githubUrl,
    tags,
    title,
    hasTags,
    imgUrl,
    longDescription,
    shortDescription,
    isDeleted: false,
    createdAt: serverTimestamp(),
  });
};

export const addContent = async ({
  githubUrl,
  image,
  title,
  hasTags,
  longDescription,
  shortDescription,
}) => {
  const imgUrl = await uploadImage(image);

  await addDoc(collection(db, "content"), {
    githubUrl,
    title,
    hasTags,
    imgUrl,
    longDescription,
    shortDescription,
    isDeleted: false,
    createdAt: serverTimestamp(),
  });
};
