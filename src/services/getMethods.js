import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getProjects = async () => {
  const snapshot = await getDocs(collection(db, "projects"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getCaseStudies = async () => {
  const snapshot = await getDocs(collection(db, "case-studies"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getContent = async () => {
  const snapshot = await getDocs(collection(db, "content"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
