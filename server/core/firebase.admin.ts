import admin from "firebase-admin";

export const fbAdmin = admin.initializeApp({
  credential: admin.credential.cert("./firebase.admin.json"),
  databaseURL:
    "https://chat-7139d-default-rtdb.europe-west1.firebasedatabase.app",
});
