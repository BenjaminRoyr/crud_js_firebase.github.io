// Se importa un sdk de firebase para hacer la conexión con firebase según el proyecto creado
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
// Como se creo una base de datos en firestore se debe importar un cdn para poder utilizar la base de datos
import {
  getFirestore,
  collection,  
  onSnapshot, //escucha cambios en tiempo real
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"; 

// Configuracion de Firebase para la web
const firebaseConfig = {
  //Aqui van las credenciales
  apiKey: "AIzaSyBn1asgSpgBHVPP7AEZ6x4p_yBHooRqe8s",
  authDomain: "crud-js-ac1ea.firebaseapp.com",
  projectId: "crud-js-ac1ea",
  storageBucket: "crud-js-ac1ea.appspot.com",
  messagingSenderId: "375949288145",
  appId: "1:375949288145:web:54e2b43218e447a0739bf0"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore(); //esta funcion hace que se conecte con las credenciales proporcionados

//funcion para guardar una colección
export const guardarUsuario = (nombre, apellido, ci) =>
  addDoc(collection(db, "Usuario"), { nombre, apellido, ci });

//funcion para obtener todos los usuarios registrados  
export const obtenerUsuario = (callback) =>
  onSnapshot(collection(db, "Usuario"), callback);

//funcion para eliminar todos los usuarios
//si no le pasamos el id, lo borrara todos los documentos
export const eliminaUsuario = (id) => deleteDoc(doc(db, "Usuario", id));

//funcion que obtiene un usuario por su id, sirve para eliminar o editar
export const obtenerUsuarioXid = (id) => getDoc(doc(db, "Usuario", id));

//funcion que actualiza un usuario por su id y lo que se vaya ingresar por pantalla
export const actualizarUsuario = (id, objUsuario) =>
  updateDoc(doc(db, "Usuario", id), objUsuario);

