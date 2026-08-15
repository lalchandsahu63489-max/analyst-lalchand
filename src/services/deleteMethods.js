import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const deleteProject = async (id) => {
  await deleteDoc(doc(db, "projects", id));
};

export const deleteCaseStudy = async (id) => {
  await deleteDoc(doc(db, "case-studies", id));
};

export const deleteContent = async (id) => {
  console.log("deleting with the id : ", id);
  await deleteDoc(doc(db, "content", id));
};
