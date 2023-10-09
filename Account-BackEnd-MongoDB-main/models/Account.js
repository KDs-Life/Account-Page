// Bibliothek namens "mongoose" für Datenbank-Dinge.
import mongoose from "mongoose";

// Wir erstellen ein Schema für einen "Account".
const accountSchema = new mongoose.Schema({
  // Der Name .
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true, // Jeder Name sollte einmalig sein.
    trim: true, // Wir entfernen Leerzeichen am Anfang und Ende des Namens.
  },
  // Der Vorname 
  first_name: {
    type: String,
    required: [true, "First Name is required"],
    unique: true, // Jeder Vorname sollte einmalig sein.
    trim: true, // Wir entfernen Leerzeichen am Anfang und Ende des Vornamens.
  },
  // Die E-Mail 
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // Jede E-Mail sollte einmalig sein.
    trim: true, // Wir entfernen Leerzeichen am Anfang und Ende der E-Mail.

    // Hier um sicherzustellen, dass die E-Mail wirklich ist.
    validate: { //validate-Option in der Mongoose-Bibliothek 
      validator: function (value) {
        // Wir benutzen einen besonderen Code (Regulärer Ausdruck), um die E-Mail zu überprüfen.
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(value); // Wir überprüfen, ob die E-Mail passt.
      },
      message: "Invalid email address", // Wenn die E-Mail nicht passt, sagen wir "Ungültige E-Mail-Adresse".
    },
  },
  // Ein Bild kann gespeichert werden, aber es ist nicht zwingend erforderlich.
  image: {
    type: String, // Hier können wir den Dateipfad zu einem Bild speichern, wenn wir möchten.
  },
});

// Wir exportieren dieses Schema, damit wir es später verwenden können.
export default mongoose.model("Account", accountSchema);
