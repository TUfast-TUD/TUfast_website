import Link from 'next/link'
import Layout from '../components/Layout'

const Datenschutz = () => {
    return (
        <Layout site="Datenschutz" siteKey="datenschutz">
            <h2>Datenschutzerklärung für die TUfast TU Dresden Browsererweiterung</h2>
            <p>
                <b>Die Sicherheit der Erweiterung und der Nutzerdaten hat für uns höchste Priorität.
                Wir sind verpflichtet, eine Datenschutzerklärung zu veröffentlichen.</b>
            </p>
            <p>
                <b>This text is currently available in german language only. Please contact us for further requrests.</b>
            </p>
            <hr />

            <h3>Wo werden Daten gespeichert?</h3>
            <p>
                Die Erweiterung TUfast TU Dresden speichert Daten ausschließlich lokal auf dem PC.
                Alle Daten können jederzeit vom Anwender gelöscht werden.
                Wenn die Erweiterung deinstalliert wird, werden alle Daten gelöscht.
            </p>

            <h3>Wie werden Daten gespeichert?</h3>
            <p>
                Personalisierte Einstellungen (Nutzerpräferenzen) werden im Klartext gespeichert.
                Die Liste mit OPAL-Kursen wird aus Performance-Gründen ebenfalls im Klartext gespeichert.
                Sensible Nutzerdaten werden verschlüsselt lokal gespeichert.
            </p>

            <h3>Welche Daten können gespeichert werden?</h3>
            <p>
                Die Erweiterung speichert nur Daten, welche für die Funktionalität notwendig sind.
                Der Anwender entscheidet selbst, welche Daten gespeichert und welche Funktionen verwendet werden sollen.
                Folgende Daten können auf dem PC gespeichert werden:
                <ul>
                    <li>Eine Liste mit Opal-Kursen sowie zugehörige Links (Klartext).</li>
                    <li>Personalisierte Einstellungen für bessere Nutzbarkeit (Klartext).</li>
                    <li>Wenn der Nutzer sich dafür entscheidet über das entsprechende Formular Login-Daten zu speichern, werden diese lokal gespeichert (verschlüsselt).</li>
                </ul>
            </p>

            <h3>Wie kann der Anwender alle Daten löschen?</h3>
            <p>
                Wenn die Erweiterung deinstalliert wird, werden alle Daten endgültig gelöscht.
                Zusätzlich steht eine entsprechende Funktion innerhalb der Anwendung zur Verfügung mit der alle Daten gelöscht oder auf die unpersonalisierten Standardwerte zurückgesetzt werden können.
            </p>

            <h3>Wie funktioniert das automatische Anmelden in Opal & Co?</h3>
            <p>
                AutoLogin ist nur möglich, wenn der Anwender diese Funktion explizit aktiviert hat.
                Wenn der Anwender dann beispielsweise OPAL besucht und auf die Anmeldeseite gelangt, werden die Anmeldedaten aus dem lokalen Speicher geladen, entschlüsselt und in die Felder für “Benutzername” und “Passwort” eingetragen.
                Anschließend wird der Anmelde-Button gedrückt. Der Nutzer spart sich somit alle Klicks und der Anmeldeprozess läuft automatisiert.
            </p>

            <h3>Was habe ich als Anwender zu beachten?</h3>
            <p>
                Die Erweiterung sollte nur auf vertrauten Geräten verwendet werden.
                Das sind Geräte, auf denen potentiell bösartige Angreifer keinen längeren, unbeaufsichtigten Zugriff haben.
            </p>

            <h3>🔍 Wie kann das alles nachgeprüft werden?</h3>
            <p>
                Der Quellcode dieser Erweiterung ist öffentlich, das heißt jeder kann den Code einsehen:<br />
                <a href="https://github.com/TUfast-TUD/TUfast_TUD" target={'_blank'} rel="noreferrer">github.com/TUfast-TUD/TUfast_TUD</a>
            </p>

            <h3>📧 Kontakt</h3>
            TUfast-Team<br />
            Ansprechpartner: Oliver Hausdörfer<br/>
            <a href="mailto:frage@tu-fast.de" target={'_blank'} rel="noreferrer">frage@tu-fast.de</a><br/>
            <Link href="https://tu-fast.de">tu-fast.de</Link>
        </Layout >
    )
}

export default Datenschutz