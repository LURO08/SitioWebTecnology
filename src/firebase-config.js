// Importa solo las funciones necesarias de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAkhfP7nPHafrZ0K8PursVR5PEiA60FZf0",
  authDomain: "e-commers-67174.firebaseapp.com",
  projectId: "e-commers-67174",
  storageBucket: "e-commers-67174.appspot.com",
  messagingSenderId: "241953923823",
  appId: "1:241953923823:web:377db761230c0d57aa311a"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios de Firebase
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); // Utiliza getAuth para obtener la instancia de autenticación


// Exporta las instancias para usar en otras partes de tu aplicación
export { auth, db, storage };
