import firibase from "firebase";

import firebaseConfig from "../../firebase.json";

export const fb = firibase.initializeApp(firebaseConfig);
