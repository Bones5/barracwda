import * as functions from "firebase-functions";

import Coda from "coda-js";
const coda = new Coda(functions.config().coda.apikey); // insert your token

// trick for using async in a script
exports.fetchEvents = functions.https.onRequest(async (req, res) => {
  const table = await coda
    .getTable("I7tb1ANrcq", "grid-SuFWRYkDIu")
    .catch(e => console.log(e));

  await res
    .status(201)
    .type("application/json")
    .send(table);
});
