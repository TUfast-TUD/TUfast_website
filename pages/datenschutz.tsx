import Layout from '../components/Layout'
import Markdown from '../components/Markdown'

const Datenschutz = () => {
  return (
    <Layout site="Datenschutz" siteKey="datenschutz">
      <Markdown content={content} />
    </Layout >
  )
}

export default Datenschutz

const content = `
## Datenschutzerklärung für die TUfast TU Dresden Browsererweiterung

**Die Sicherheit der Erweiterung und der Nutzerdaten hat für uns höchste Priorität. Wir sind verpflichtet, eine Datenschutzerklärung zu veröffentlichen.**

**This text is currently available in German only. Please contact us for further requests.**

***

### Wo werden Daten gespeichert?
Die Erweiterung TUfast TU Dresden speichert Daten ausschließlich lokal auf dem PC.
Alle Daten können jederzeit vom Anwender gelöscht werden.
Wenn die Erweiterung deinstalliert wird, werden alle Daten gelöscht.

### Wie werden Daten gespeichert?
Personalisierte Einstellungen (Nutzerpräferenzen) werden im Klartext gespeichert.
Die Liste mit OPAL-Kursen wird aus Performance-Gründen ebenfalls im Klartext gespeichert.
Sensible Nutzerdaten werden verschlüsselt lokal gespeichert.

### Welche Daten können gespeichert werden?
Die Erweiterung speichert nur Daten, welche für die Funktionalität notwendig sind.
Der Anwender entscheidet selbst, welche Daten gespeichert und welche Funktionen verwendet werden sollen.
Folgende Daten können auf dem PC gespeichert werden:
- Eine Liste mit Opal-Kursen sowie zugehörige Links (Klartext).
- Personalisierte Einstellungen für bessere Nutzbarkeit (Klartext).
- Wenn der Nutzer sich dafür entscheidet über das entsprechende Formular Login-Daten zu speichern, werden diese lokal gespeichert (verschlüsselt).

### Wie kann der Anwender alle Daten löschen?
Wenn die Erweiterung deinstalliert wird, werden alle Daten endgültig gelöscht.
Zusätzlich steht eine entsprechende Funktion innerhalb der Anwendung zur Verfügung mit der alle Daten gelöscht oder auf die unpersonalisierten Standardwerte zurückgesetzt werden können.

### Wie funktioniert das automatische Anmelden in Opal & Co?
AutoLogin ist nur möglich, wenn der Anwender diese Funktion explizit aktiviert hat.
Wenn der Anwender dann beispielsweise OPAL besucht und auf die Anmeldeseite gelangt, werden die Anmeldedaten aus dem lokalen Speicher geladen, entschlüsselt und in die Felder für “Benutzername” und “Passwort” eingetragen.
Anschließend wird der Anmelde-Button gedrückt. Der Nutzer spart sich somit alle Klicks und der Anmeldeprozess läuft automatisiert.

### Was habe ich als Anwender zu beachten?
Die Erweiterung sollte nur auf vertrauten Geräten verwendet werden.
Das sind Geräte, auf denen potentiell bösartige Angreifer keinen längeren, unbeaufsichtigten Zugriff haben.

### 🔍 Wie kann das alles nachgeprüft werden?
Der Quellcode dieser Erweiterung ist öffentlich, das heißt jeder kann den Code einsehen:
[https://github.com/TUfast-TUD/TUfast_TUD](https://github.com/TUfast-TUD/TUfast_TUD)

### 📧 Kontakt
TUfast-Team
Ansprechpartner: Oliver Hausdörfer
[frage@tu-fast.de](mailto:frage@tu-fast.de)
`
