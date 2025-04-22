<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Email di destinazione fissa
$destinatario = "alessio.poli@iisviolamarchesini.edu.it"; // Sostituisci con l'indirizzo email desiderato

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera i dati dal form
    $nome = htmlspecialchars($_POST['nome']);
    $cognome = htmlspecialchars($_POST['cognome']);
    $email = htmlspecialchars($_POST['email']);
    $oggetto = htmlspecialchars($_POST['oggetto']);
    $messaggio = htmlspecialchars($_POST['messaggio']);

    // Validazione
    if (empty($nome) || empty($cognome) || empty($email) || empty($messaggio)) {
        echo "<div style='color: red;'>Errore: Tutti i campi sono obbligatori.</div>";
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<div style='color: red;'>Errore: L'indirizzo email non è valido.</div>";
        exit;
    }

    // Costruisci l'oggetto e il corpo della mail
    $subject = "Nuovo messaggio da LIMITI MATEMATICI: $oggetto";
    $body = "Hai ricevuto un nuovo messaggio:\n\n";
    $body .= "Nome: $nome $cognome\n";
    $body .= "Email: $email\n";
    $body .= "Oggetto: $oggetto\n\n";
    $body .= "Messaggio:\n$messaggio\n";

    // Intestazioni della mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Invia la mail
    if (mail($destinatario, $subject, $body, $headers)) {
        echo "<div style='color: green;'>Messaggio inviato con successo!</div>";
    } else {
        echo "<div style='color: red;'>Errore durante l'invio del messaggio. Riprova più tardi.</div>";
    }
}
?>