# **Question 4**
## **JS**
### Show and explain the concept of promises in JavaScript.
* Et Promise i JavaScript er en måde at håndtere asynkrone operationer på. Det er som et løfte om, at en opgave vil blive færdig i fremtiden, enten med succes (løftet opfyldes) eller med en fejl (løftet brydes)
* Der er 3 slags tilstande et Promise kan være i:
  * Pending: Løftet er ikke opfyldt eller brudt endnu. Det venter på at blive færdiggjort.
  * Fulfilled: Løftet er opfyldt, og vi har fået det forventede resultat.
  * Rejected: Løftet er brudt, og der er opstået en fejl

For et eksempel brug addRecipe.jsx - handleSubmit funktionen(linje39):
* Promise Oprettelse: En promise oprettes, når du kalder en funktion, der returnerer en promise, såsom uploadFile(file) eller addRecipe(...). Opretter et promise når vi bruger async 
* Pending: Når en promise oprettes, starter den i "pending" tilstand. Det betyder, at operationen er i gang, men endnu ikke afsluttet. 
* Fulfilled: Hvis operationen lykkes, går promisens tilstand til "fulfilled", og den returnerer en værdi. Dette håndteres med await i vores kode.
* Rejected: Hvis operationen fejler, går promisens tilstand til "rejected", og den returnerer en fejl. Dette håndteres med catch blokken i vores kode

* Når vi bruger await nøgleordet, venter(pending) vi på, at det promise, som await er bundet til, enten bliver fulfilled eller rejected

## **REACT**
### **Explain the following code:**
**Vær opmærksom på at koden nedenunder er der tilføjet kommentarer på. Kommentarerne er der ikke i den originale kodeeksempel**

Forklaring på ErrorBoundary-komponentet:
* Formål: Fange og håndtere fejl i children komponenterne, så applikationen ikke går ned.
* useState: Opretter en state-variabel hasError, der starter som false.
* useEffect: Tilføjer en event listener, der lytter efter fejl. Hvis der opstår en fejl, sættes hasError til true
* Kort opsummering: ErrorBoundary overvåger for fejl i children komponenter og viser en fejlbesked, hvis der opstår en fejl. Samt bruger MyComponent vores ErrorBoundary til at fange fejl i det komponent træ
```
import React, { useState, useEffect } from 'react';

// ErrorBoundary-komponent
const ErrorBoundary = ({ children }) => {
  // Definerer en state-variabel 'hasError' for at spore, om der er sket en fejl
  const [hasError, setHasError] = useState(false);

  // useEffect-hook for at tilføje en event listener, der lytter efter fejl
  useEffect(() => {
   const handleError = (error, info) => {
    console.error('Fejl fanget af error boundary:', error, info);
    setHasError(true); // Sætter 'hasError' til true, hvis der opstår en fejl
   };

   window.addEventListener('error', handleError); // Tilføjer event listener

   return () => {
    window.removeEventListener('error', handleError); // Fjerner event listener ved oprydning
   };
  }, []); // Tom array betyder, at dette kun kører én gang, når komponenten monteres

  // Hvis 'hasError' er true, vis en fejlbesked
  if (hasError) {
   return <h1>Der skete en fejl.</h1>;
  }

  // Hvis ingen fejl, returner child komponenterne
  return children;
};

// MyComponent-komponent
const MyComponent = () => {
  return (
   <ErrorBoundary>
    {/* Resten af komponenttræet går her */}
   </ErrorBoundary>
  );
};

export default MyComponent;
 
```
## **Security/Routing/Styling**
### What is the purpose of Træfik?

Traefik(Reverse Proxy - Anmodninger fra Server til Klient):
* Traefik styrer netværkstrafik effektivt og sikrer, at applikationerne kører problemfrit og sikkert.
* Finder automatisk systemer: Automatisk opdager og konfigurerer kørende applikationer (f.eks. Docker containere).
* SSL management: Håndterer SSL-certifikater for sikre forbindelser.
* Trafik Routing: Sender anmodninger fra brugere til de rigtige systemer
* Load balancing: Fordeler trafik jævnt mellem servere for at optimere ydeevnen.



### **Describe some important design principles when developing a website that should be working well on mobile, tablet, as well as desktop browsers.**
Responsivt Design:
* Brug procentdele i stedet for faste pixelværdier for at sikre, at elementer skaleres korrekt i CSS
* Brug flexbox og grid i CSS til at skabe layouts, der automatisk justerer sig til skærmstørrelsen
  * Grid: Opdeler området i kolonner.
  * Flexbox: Arrangerer elementer fleksibelt inden for en grid celle
Andet:
* Sørg for, at knapper og links er store nok til at blive trykket på med fingre
* Brug læsbare skrifttyper og juster størrelsen for forskellige enheder
