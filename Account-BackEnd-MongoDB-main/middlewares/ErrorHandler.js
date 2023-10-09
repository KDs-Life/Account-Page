// Die errorHandler-Funktion wird definiert und exportiert.
export const errorHandler = (error, req, res, next) => {
  // Hier wird der HTTP-Statuscode festgelegt. 
  // Wenn der Fehler einen eigenen Statuscode hat, wird dieser verwendet, 
  // andernfalls wird der Standardwert 500 (Internal Server Error) verwendet.
  const statusCode = error.statusCode || 500;

  // Hier wird die Fehlermeldung festgelegt. 
  // Wenn der Fehler eine eigene Fehlermeldung hat, wird diese verwendet,
  // andernfalls wird die Standardmeldung "Server Error" verwendet.
  const message = error.message || "Server Error";

  // Hier wird die Antwort an den Client gesendet.
  // Der HTTP-Statuscode wird auf den zuvor festgelegten statusCode gesetzt,
  // und als Antwort wird ein JSON-Objekt gesendet, das eine Nachricht (message) enthält,
  // die den Fehler beschreibt.
  res.status(statusCode).json({ message: message });
};
