// Importiere das Express-Framework
import express from "express";

// Importiere den accountController-Datei als Modul
import * as accountController from "../controllers/accountController.js";

// Erstelle einen Router für die Accounts-Routen
const accountsRouter = express.Router();

// Definiere die Routen und ihre entsprechenden Controller-Methoden

// Route: /accounts
accountsRouter
  .route("/")
  .get(accountController.getAllAccounts) // GET-Anfrage ruft die Methode `getAllAccounts` im `accountController` auf
  .post(accountController.addNewAccount); // POST-Anfrage ruft die Methode `addNewAccount` im `accountController` auf

// Route: /accounts/:id
accountsRouter
  .route("/:id")
  .get(accountController.getAccountById) // GET-Anfrage ruft die Methode `getAccountById` im `accountController` auf
  .put(accountController.updateAccount) // PUT-Anfrage ruft die Methode `updateAccount` im `accountController` auf
  .delete(accountController.deleteAccount); // DELETE-Anfrage ruft die Methode `deleteAccount` im `accountController` auf

// Route: /accounts/id/addTag
accountsRouter.patch("/id/addTag", accountController.addNewAccount); // PATCH-Anfrage ruft die Methode `addNewAccount` im `accountController` auf

// Exportiere den erstellten Router, um ihn in anderen Teilen der Anwendung zu verwenden
export default accountsRouter;

{
  /* 
 Definition der Routen und ihrer Controller-Methoden:
 
    Es werden zwei Haupt-Routen definiert: "/accounts" und "/accounts/:id".
    Jede dieser Routen hat spezifische HTTP-Verben und Controller-Methoden:
    GET: Ruft Daten ab.
    POST: Erstellt neue Daten.
    PUT: Aktualisiert vorhandene Daten.
    DELETE: Löscht Daten.
Die zugehörigen Controller-Methoden werden aus dem `accountController`-Modul aufgerufen, um die entsprechenden Aufgaben auszuführen.

    Import des accountController-Moduls:

    import * as accountController from "../controllers/accountController.js";

Hier wird das Modul accountController importiert, das verschiedene Controller-Methoden enthält, um Anfragen für die "Accounts" zu verarbeiten.

*/
}
