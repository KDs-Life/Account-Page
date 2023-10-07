import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true, //  Das Feld erfordert eindeutige Werte, keine Duplikate sind erlaubt.
    trim: true, // Entfernt führende und nachfolgende Leerzeichen aus dem Wert, um Datenkonsistenz sicherzustellen.
  },
  first_name: {
    type: String,
    required: [true, "First-Name is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "E-Mail is required"],
    unique: true,
    trim: true,
  },
  image: {
    type: String, // Speichern Sie den Dateipfad zum hochgeladenen Bild.
  }
});

export default mongoose.model("Account", accountSchema);