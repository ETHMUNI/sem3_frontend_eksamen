# **Question 6**

## **JS**

### **What is the difference between localStorage and sessionStorage in JavaScript?**
Local Storage:
*  Data gemt i localStorage forbliver gemt, selv efter at du lukker browseren. Det betyder, at informationen stadig vil være der, næste gang du åbner browseren og besøger websiden igen

Session Storage:
* Data gemt i sessionStorage forbliver kun gemt, så længe browseren er åben. Når du lukker browseren eller fanen, bliver informationen slettet

## **REACT**

### **What is the purpose of the useEffect hook?**
* useEffect-hooket bruges til at håndtere sideeffekter. Det køres efter hver render og kan specificere, hvilke dependencies der skal trigge effekten. For eksempel kan det køres, når komponenten renderes, ændres eller fjernes
* Eksempler på sideeffekter:
  * Data fetching: Hente data fra en API.
  * Manipulation af DOM(Document Object Model): Ændre DOM uden for den normale React rendering, som at tilføje event listeners
  * Timers: Starte og stoppe timers eller intervaller

### **Explain the need for the dependencies array in the useEffect hook.**
* Dependencies array: En liste over variabler, som useEffect skal holde øje med. Hvis en af disse variabler ændrer sig, vil useEffect køre igen. Hvis arrayet er tomt, kører effekten kun én gang efter den første render

## **Security/Routing/Styling**

### **Explain how navigation works in React, and the difference from how it's done in a multipage application.**
* Single Page Application (SPA): Hele appen er på én side. Når du klikker på et link, ændres kun en del af siden, ikke hele siden
* Multi Page Application (MPA): Et klik på et link resultere i, at hele siden genindlæses fra serveren
* React Router: I en React-applikation bruges react-router-dom til navigation. Det betyder, at når du klikker på et link, ændres URL'en uden at genindlæse hele siden. React håndterer visningen af forskellige komponenter baseret på URL'en.


### **Show an example of how navigation can be implemented in React**
Brug App.jsx og Navbar.jsx for at vise et eksempel.
* App.jsx: Hovedkomponenten, der bruger Router til at definere ruterne for applikationen. Routes og Route komponenterne bruges til at definere, hvilken komponent der skal vises for hver rute.
* Navbar.jsx: Indeholder navigationsmenuen med links til forskellige sider. Links er implementeret ved hjælp af `<Link>` komponenten fra react-router-dom
  * `<Link>`- Når man klikker på et <Link>, ændres URL'en i browseren uden at genindlæse siden, hvilket gør navigationen hurtigere og mere effektiv. Dette kaldes "client-side routing".
  * Når en bruger klikker på et link i vores navigation bar, som bruger `<Link>`, ændres URL'en. Router fanger denne ændring og opdaterer visningen ved at renderere den relevante komponent, som er defineret i `<Routes>`.
