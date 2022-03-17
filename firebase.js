 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

  // https://firebase.google.com/docs/web/setup#available-libraries
  import { 
    getFirestore,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"

  import { } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js"

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDM8njJqAvT4vQmFntSebMpsmHUpiIJsF4",
    authDomain: "todo-149d3.firebaseapp.com",
    projectId: "todo-149d3",
    storageBucket: "todo-149d3.appspot.com",
    messagingSenderId: "687054113667",
    appId: "1:687054113667:web:abe6625d984674eb9e44b6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//? codigo de app

const db = getFirestore(); //para conectar con la db

export const saveTask =(title,description)=>{
  addDoc(collection(db,'tasks'),{title:title, description:description})
}

export const getTasks = async ()=>{
  return await getDocs(collection(db,'tasks'))
}

export const onGetTasks = (callback) =>{
  onSnapshot(collection(db,'tasks'),callback)
}

export const deleteTask =  id =>{
  deleteDoc(doc(db,'tasks',id))
}

export const getTask = async (id)=>{
  return await getDoc(doc(db,'tasks',id))
}

export const updateTask =  (id,newFields)=>{
  updateDoc(doc(db,'tasks',id),newFields)
}