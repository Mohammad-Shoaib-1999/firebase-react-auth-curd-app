import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, orderByValue, ref, set } from "firebase/database";
import {
  getFirestore,
  Timestamp,
  collection,
  addDoc,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGmngG8Aesg3k4Bfm-Xh5tUrsFa-SORoc",
  authDomain: "curd--app.firebaseapp.com",
  projectId: "curd--app",
  storageBucket: "curd--app.appspot.com",
  messagingSenderId: "563016648792",
  appId: "1:563016648792:web:5817d01011159e9774622d",
  databaseURL: "https://curd--app-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);
const firestoreDB = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);


export const FirebaseProvider = (props) => {
const [user,setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null)
    })
  }, [])
  

  const signupUserWithEamilAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signinUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const isLoggedIn = user ? true :false;
  
  const logoutUser = () => {
    console.log("lfka");
    return signOut(auth);
  };

  const putData = (key, data) => set(ref(db, key), data);

  const addTask = async (title, description) => {
    try {
      await addDoc(collection(firestoreDB, "tasks"), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }
  };

  const subscribeToTasks = (setTasks) => {
    const q = query(
      collection(firestoreDB, "tasks"),
      orderByValue("created", "desc")
    );
    return onSnapshot(q, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  const updateTask = async (id, title, description) => {
    const taskDocRef = doc(firestoreDB, "tasks", id);
    try {
      await updateDoc(taskDocRef, {
        title: title,
        description: description,
      });
    } catch (err) {
      alert(err);
    }
  };

  const deleteTask = async (id) => {
    const taskDocRef = doc(firestoreDB, "tasks", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEamilAndPassword,
        signinUserWithEmailAndPassword,
        signInWithGoogle,
        isLoggedIn,
        logoutUser,
        putData,
        addTask,
        subscribeToTasks,
        updateTask,
        deleteTask,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};







export const useFirebase = () => useContext(FirebaseContext);


