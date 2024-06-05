# **Question 5**

## **JS**

### Show the difference between synchronous and asynchronous programming and how does async and await fit into this?
Synchronous:
* Programmet udfører én opgave ad gangen og venter, indtil den er færdig, før den går videre til næste opgave

Vi bruger synkroniske funktioner i addRecipe.jsx:
* Vores state opdatering er synkroniske
* Vores event handlers som handleChange, handleFileChange og handleCategoryChange, er synkroniske. Disse funktioner håndterer ændringer i inputfelter og filvalg og opdaterer state synkront

Asynchronous:
* Programmet starter en opgave og fortsætter med andre opgaver, mens den første opgave arbejder i baggrunden. Når den første opgave er færdig, kommer programmet tilbage til den
  * async: Når du markerer en funktion som async, betyder det, at funktionen vil returnere et promise, og du kan bruge await inde i funktionen
    * Når du erklærer en funktion med async, gør det funktionen asynkron. Denne funktion returnerer altid et promise, uanset hvad der returneres fra funktionen
  * await: Bruges til at vente på, at en asynkron opgave er færdig, uden at blokere resten af programmet.
    * await kan kun bruges inde i en async-funktion. Det får JavaScript til at vente på, at et promise bliver opfyldt (resolved) eller afvist (rejected), før det fortsætter med resten af koden i funktionen 
 
 Vi bruger også en asynkronisk funktion i addRecipe.jsx:
 * I vores handleSubmit event handler bruger vi async og await for at vente på, at asynkrone operationer bliver færdige uden at blokere resten af koden.
 * Linje 51: `await uploadFile(file)`: venter på, at filen bliver uploadet, og returnerer det genererede filnavn, som derefter sættes som `recipe.imageUrl`
 * Linje 54: `await addRecipe(...)`: venter på, at opskriften bliver tilføjet til databasen, og returnerer responsen (her kaldet data), som logges til konsollen

## **REACT**

### Provide examples for different ways of doing conditional rendering.
* Conditional rendering betyder, at vi viser forskellige ting på skærmen afhængigt af visse betingelser
* For conditional rendering bruger vi, if-else statements, Ternary operators, og logical AND(&&)
  
* Ternary operators er en kortere måde at skrive en if-else sætning på.
* Vi bruger ternary operators i addRecipe.jsx - linje 32:
```
setFileLabel(file ? file.name : 'No file chosen');
```
* Hvis en fil er valgt (file er true), sættes etiketten til filens navn (file.name).
* Hvis ingen fil er valgt (file er false), sættes etiketten til 'No file chosen'.
* Så, funktionen setFileLabel(file ? file.name : 'No file chosen') sørger for, at etiketten altid viser enten navnet på den valgte fil eller en besked om, at ingen fil er valgt

## **Security/Routing/Styling**

### Show and explain conceptually a typical flow of using JWTs for user authentication in a React application.
* JWT står for JSON Web Token og bruges ofte til at autentificere brugere i applikationer
* Hvorfor bruge JWT: det giver en sikker og stateless måde at autentificere brugere på, håndtere sessioner uden at gemme tilstand på serveren

1. Login: Brugeren logger ind og får en JWT.
2. Gem JWT: React appen gemmer JWT'en.
3. Brug JWT: JWT'en sendes med i alle fremtidige anmodninger for at autentificere brugeren.
4. Verificer JWT: Backend serveren tjekker JWT'en og sender svar tilbage, hvis den er gyldig.
