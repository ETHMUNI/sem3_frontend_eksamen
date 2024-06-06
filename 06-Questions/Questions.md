# **Question 6**

## **JS**

### **What is the difference between localStorage and sessionStorage in JavaScript?**
Local Storage:
*  Data gemt i localStorage forbliver gemt, selv efter at du lukker browseren. Det betyder, at informationen stadig vil være der, næste gang du åbner browseren og besøger websiden igen

Session Storage:
* Data gemt i sessionStorage forbliver kun gemt, så længe browseren er åben. Når du lukker browseren eller fanen, bliver informationen slettet

### Show the use of different storage options in browsers developer tools.
* Du kan vise localStorage ved at logge ind med en bruger på vores applikation
* Under browser developer tools, gå til Application og derfra kan du se hvad localStorage og sessionStorage gemmer.
* Under localStorage burde du kunne se role, token og username.
* Vi bruger ikke sessionStorage så den burde være tom.

## **REACT**

### Show and explain the three parts ( effect function , dependency array and cleanup function ) of the useEffect hook?
Brug UserRecipe.jsx for dette eksempel:
* Linje 11: Vi bruger useEffect til at hente opskrifter fra en API. API kaldet er `fetchRecipeByEmail` fra ApiRecipes.js
* Linje 21: I dette eksempel er dependency arrayet tomt, hvilket betyder, at effektfunktionen kun køres én gang, når komponenten mountes
* I dette tilfælde har vi ikke nogen cleanup function. Det har vi ikke pga. vi mounter kun én gang, vi har ikke nogen vedvarende ressourcer som intervaller og event handlers, og vores fetch anmodning afslutter af sig selv.
 * Fetch-anmodningen fuldføres, når dataene er hentet, og der er ingen vedvarende ressource, der fortsætter, efter anmodningen er fuldført 

Forklaringer:
* useEffect-hooket bruges til at håndtere sideeffekter. Det køres efter hver render og kan specificere, hvilke dependencies der skal trigge effekten. For eksempel kan det køres, når komponenten renderes, ændres eller fjernes
* Eksempler på sideeffekter:
  * Data fetching: Hente data fra en API.
  * Manipulation af DOM(Document Object Model): Ændre DOM uden for den normale React rendering, som at tilføje event listeners
  * Timers: Starte og stoppe timers eller intervaller
* Dependencies array: En liste over variabler, som useEffect skal holde øje med. Hvis en af disse variabler ændrer sig, vil useEffect køre igen. Hvis arrayet er tomt, kører effekten kun én gang efter den første render
* Cleanup function: Koden, der udføres for at rydde op efter sideeffekter

## **Security/Routing/Styling**

### Show and explain of what a JWT token is composed
For et eksempel gå til ApiRecipes.jsx under service folder og brug addRecipe funktionen

JWT'en består af tre dele:

* Header: Information om algoritme og type. I vores tilfælde er det at vi det både Content-Type og Authorization
 * Content-Type: Fotæller at data er i JSON format
 * Authorization: Sender JWT'en til serveren for at verificere, om brugeren har adgang til at poste en opskrift. 
* Payload: Indeholder data. I vores tilfælde er det recipeData som indeholder: name, category, indgredients, instructions, imageUrl & brugerens e-mail, hentet fra localStorage
* Signature: Sikrer, at tokenet ikke er blevet ændret og er autentisk.
 * Når du sender en JWT til serveren, indeholder den allerede en signatur, som serveren bruger til at verificere, at tokenet ikke er blevet ændret. Som udvikler ser du ikke direkte signaturen eller skriver den ind manuelt; det hele håndteres automatisk, når JWT'en oprettes og verificeres 

### **Explain how navigation works in React, and the difference from how it's done in a multipage application.**
* Single Page Application (SPA): Hele appen er på én side. Når du klikker på et link, ændres kun en del af siden, ikke hele siden
* Multi Page Application (MPA): Et klik på et link resultere i, at hele siden genindlæses fra serveren
* React Router: I en React-applikation bruges react-router-dom til navigation. Det betyder, at når du klikker på et link, ændres URL'en uden at genindlæse hele siden. React håndterer visningen af forskellige komponenter baseret på URL'en.


### **Show an example of how navigation can be implemented in React**
Brug App.jsx og Navbar.jsx for at vise et eksempel.
* App.jsx: Hovedkomponenten, der bruger Router til at definere ruterne for applikationen. Routes og Route komponenterne bruges til at definere, hvilken komponent der skal vises for hver rute.
* Navbar.jsx: Indeholder navigationsmenuen med links til forskellige sider. Links er implementeret ved hjælp af `<Link>` komponenten fra react-router-dom
  * `<Link>`- Når man klikker på et link, ændres URL'en i browseren uden at genindlæse siden, hvilket gør navigationen hurtigere og mere effektiv. Dette kaldes "client-side routing".
  * Når en bruger klikker på et link i vores navigation bar, som bruger `<Link>`, ændres URL'en. Router fanger denne ændring og opdaterer visningen ved at renderere den relevante komponent, som er defineret i `<Routes>`.
