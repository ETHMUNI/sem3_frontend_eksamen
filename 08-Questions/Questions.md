# Question 8

## JS

### Show and explain the concept of event bubbling in JavaScript.
* Event bubbling: En event, som f.eks. et klik, starter på det element, hvor den blev udløst, og "bobler" derefter op gennem forældre- og forfædre-elementerne.
* En fordel kunne være at man gør det muligt at håndterer events på et højere niveau i DOM'en, hvilket kan resulterer i mindre kode

Som eksempel brug den opdateret RecipeDetail.jsx:
* handleCommentClick Funktion: Hvis en slet-knap klikkes, vil handleCommentClick fange denne begivenhed via event bubbling. Vi kan kontrollere, om e.target.className inkluderer deleteButton for at udføre specifikke handlinger for slet-knappen
* onClick={handleCommentClick}(linje 157): Hvis en hvilken som helst anden del af kommentaren klikkes, kan vi udføre generelle handlinger for kommentarerne i handleCommentClick 


## REACT

### Show and explain how the map function is used for rendering lists in React and explain the purpose of the key attribute in React lists?
* Formål med key: Hjælper React med at identificere, hvilke elementer i en liste der er blevet ændret, tilføjet eller fjernet
* Gør det muligt for React at opdatere UI mere effektivt ved kun at ændre de elementer, der er nødvendige

Forklaring om hvordan map funktionen virker:
1. Du har et array af data, som du vil vise i brugergrænsefladen.
2. Du bruger map funktionen til at løbe gennem hvert element i arrayet og skabe en ny liste af React-komponenter.
3. Den nye liste af React-komponenter bliver derefter rendere i UI.

Eksempel i UserRecipe.jsx:
* Tjek for Liste(linje 38): Vi tjekker først, om recipes er en liste og om den har nogen elementer `(Array.isArray(recipes) && recipes.length > 0)`
  
* Gennemgå Liste(linje 39): Hvis betingelsen er true, bruger vi map funktionen til at gennemgå hvert recipe i recipes listen.
  
* Oprette Liste Elementer: For hver recipe i listen, opretter vi et li element med indholdet fra recipe.
  
* Tilføje Unik Key(linje 40): Hvert li element får en unik key baseret på recipe.id

## Security/Routing/Styling
### Describe conceptually what HTTPS is and how we got it working on our deployed websites.
* HTTPS står for HyperText Transfer Protocol Secure og sikrer, at data, der sendes mellem din webbrowser og en hjemmeside, er krypteret og beskyttet mod aflytning og manipulation. Det gør det ved at bruge SSL-certifikater.

Alt sker i vores Docker Compose, acme.json og .env filer:
Docker compose fil:
* Vi opretter bl.a. en middleware for at omdirigere HTTP-trafik til HTTPS for alle services, hvilket sikrer, at alle forbindelser er sikre.
* HTTPS håndteres på vores deployede hjemmeside ved hjælp af Traefik(Reverse Proxy). Dette setup sikrer, at alle HTTP-anmodninger omdirigeres til HTTPS, og at Traefik automatisk håndterer SSL-certifikater ved hjælp af Let's Encrypt. Det betyder at forbindelsen er krypteret og sikker, hvilket beskytter brugerens data

acme.json:
* Vi bruger acme filen til at kopierer Let's Encrypt certifikater lokalt for nem backup.
* Ved brug af acme.json filen sørger vi for at træfik får persistens for vores SSL-certifikater

env:
* env filen indeholder konfigurationsdetaljer og credentials, der gør det muligt for Traefik at kommunikere med Let's Encrypt og DNS-udbydere for at anmode om certifikater.(bl.a. email, acme_storage og provider(digitalocean)).
