import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firestore-grafica.firebaseio.com"
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello world from Firebase functions!");
});

export const getGoty = functions.https.onRequest((request, response) => {
  const name = request.query.name || 'No name';

  response.send({
    name
  });
});