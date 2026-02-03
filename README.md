# Lexiconline

Kort beskrivelse
Lexiconline er en simpel React-app der fungerer som et online-ordbogsinterface. Appen bruger DictionaryAPI (https://dictionaryapi.dev/) til at hente definitioner, eksempler, synonymer og udtale for søgte engelske ord.

Funktioner
- Søg på engelske ord og vis definitioner, eksempler og synonymer.
- Afspil udtale (hvis lyd findes i API).
- Enkel hash-baset navigation (Home / About).
- Responsivt layout med header, søgefelt og footer.

Krav
- Node.js (anbefales v16+)
- npm eller yarn

Installation (lokalt)
1. Klon repo og skift til projektmappen:
   - git clone <repo-url>
   - cd Lexiconline
2. Installer afhængigheder:
   - npm install
   eller
   - yarn
3. Start udviklingsserver:
   - npm run dev
   eller
   - yarn dev
4. Åbn i browser:
   - http://localhost:5173 (eller port angivet af dev-server)

Byg til produktion
- npm run build
- yarn build

Brug
- Skriv et ord i søgefeltet og tryk "Search".
- Klik lyd-ikonet for at høre udtalen, hvis tilgængelig.
- Brug navigationen øverst for at skifte mellem Home og About.

API
- Data hentes fra: https://api.dictionaryapi.dev/api/v2/entries/en/{word}
- Appen forventer en liste med resultater og benytter første element til visning.

Projektstruktur (udvalgte filer)
- src/
  - App.tsx — simpel hash-routing mellem Home og About.
  - main.tsx — React entrypoint.
  - components/
    - home/Lexiconline.tsx — hovedkomponent med søge- og resultatlogik.
    - about/About.tsx — statisk side med information om projektet.
    - home/Lexiconline.module.scss — styling (SCSS-modul).
  - assets/ — billeder og statiske ressourcer.

Fejl og edge-cases
- Tom søgning ignoreres.
- Fejl fra API viser en kort fejlbesked.
- Lydafspilning håndteres med catch for at undgå uncaught exceptions.

Licens & credits
- Data: tak til https://dictionaryapi.dev/ for gratis API.
- Billeder/ikoner: tjek src/assets og erstat ved behov.
- Tilpas licens efter eget ønske.

