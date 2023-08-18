import { initializeApp } from "firebase/app";

import {
  getFirestore,
  addDoc,
  collection,
  updateDoc,
  doc,
  getDocs,
  deleteDoc,
  query,
  limit,
} from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlaKIFmhCJOkhcGb4b1X9tUwr3g2vc-HE",
  authDomain: "savuti-c0969.firebaseapp.com",
  projectId: "savuti-c0969",
  storageBucket: "savuti-c0969.appspot.com",
  messagingSenderId: "10101294283",
  appId: "1:10101294283:web:fbdc65a3e4d1c83c7cc74e",
  measurementId: "G-N792HE0G6W",
};

export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const getAllDocuments = async (collectionName) => {
  const res = await getDocs(collection(db, collectionName));
  const modifyResponce = [];
  res.docs.forEach((e) => modifyResponce.push({ id: e.id, ...e.data() }));
  return modifyResponce;
};

export const addDocument = (data, collectionName) =>
  addDoc(collection(db, collectionName), data);

export const deleteDocument = async (collectionName, id) =>
  await deleteDoc(doc(db, collectionName, id));

export const updateDocument = async (updateUser, collectionName, docId) => {
  try {
    const docRef = doc(collection(db, collectionName), docId);
    await updateDoc(docRef, updateUser);
  } catch (err) {
    console.log(err);
  }
};
const storage = getStorage(app);

export default storage;

export const GetQueryData = async (collectionName, _q) => {
  try {
    const CollectionRef = collection(db, collectionName);
    const _query = query(CollectionRef, _q, limit(5));

    let res = await getDocs(_query);

    let data = res.docs.map((data) => {
      let id = data.id;
      return { id, ...data.data() };
    });
    return data;
  } catch (error) {}
};

// export const GetQueryData=(collectionRef,query)=>{
//   try {

//   } catch (error) {

//   }
// }

//
