# **Question 2**

## **JS**

### Show some examples where you used a callback function and explain why you used them.
Eksempelet er fra UserRecipes.jsx(linje 11): UseEffect hooket. - NOTE: Der er flere callback funktions i denne jsx. Både filter og map functions bruger callback.

Hvorfor jeg brugte callback function:
* Jeg brugte en callback-funktion inde i useEffect for at køre koden, når komponenten mountes (dvs. vises på skærmen). Dette gør det muligt at hente opskrifter, når komponenten indlæses
* Jeg brugte en callback-funktion inde i filter-metoden: `recipe => recipe.id !== id`. Denne funktion køres for hvert element i recipes-arrayet for at filtrere opskrifterne og fjerne den, der har det slettede ID. Dette opdaterer listen over opskrifter efter sletning

* Generalt ville man normalt bruge callback-funktioner, når man har at gøre med dynamisk data. Samt ville man også bruge callback functions når man henter data med asynkroniske operationer.

Forklaring om callback functions:
* En callback-funktion er en funktion, der sendes som et argument til en anden funktion og kaldes senere, når en bestemt opgave er færdig
* Man ville bruge en callback funktion, når man har brug for at udføre en opgave asynkront, det vil sige, når en opgave tager tid at fuldføre 
For eksempel:
  * Data
  * Netværksanmodninger
  * Filoperationer
  * Timers
  * Event Handling

## **REACT**

### **What is JSX? Provide an example.**
    
* JSX står for JavaScript XML. Det er en udvidelse af JavaScript, der tillader os at skrive HTML-lignende kode direkte i JavaScript-filer
* Eksemplet er fra UserRecipes.jsx(linje 34 til linje 55).

* Her bruger vi både `<h2>`, `<ul>`, `<li>`, `<p>` osv.

### How would you write JSX if you only used HTML and Javascript?

* For at skrive JSX uden at bruge JSX (kun med HTML og JavaScript) skal du dynamisk skabe og manipulere DOM-elementer ved hjælp af JavaScript. Dette involverer at bruge metoder såsom `document.createElement`, `document.addEventListener`, `document.getElementById`, `element.appendChild`, og `element.textContent` for at bygge og opdatere HTML-strukturen

## **Security/Routing/Styling**

### **Describe the purpose of flexbox and grid in css, and show some examples of what can be achieved by applying them.**
* Flexbox og Grid i CSS bruges til at skabe layout på websider. De gør det nemt at arrangere og justere elementer på en fleksibel og responsiv måde

Flexbox: 
* Formål: At arrangere elementer i en enkelt dimension, enten som en række (vandret) eller kolonne (lodret).
* Hvornår man bruger det: Når du vil placere og justere elementer på en fleksibel måde i én retning, f.eks. at centrere indhold eller skabe jævnt fordelte knapper.

Grid: 
* Formål: At arrangere elementer i to dimensioner, både rækker og kolonner.
* Hvornår man bruger det: Når du vil skabe komplekse layouts med både rækker og kolonner, f.eks. et komplet side-layout med header, sidebar, main content og footer

For eksempel brug EditRecipes.jsx:

* I Container-komponenten bruger vi Flexbox til at centrere indholdet både lodret og vandret
```
const Container = styled.div`
    display: flex;                /* Gør containeren til en flex-container */
    justify-content: center;      /* Centrerer indholdet (FormBox) på den vandret akse  */
    align-items: center;          /* Centrerer indholdet (FormBox) på den lodret akse */
    height: 100vh;                /* Giver containeren en højde på 100% af viewportens højde */
`;
```
* Forestil dig skærmen som en stor boks (Container), og indeni denne boks har du en mindre boks (FormBox). Ved at bruge justify-content: center; og align-items: center;, vil FormBox blive placeret præcist i midten af Container, både vandret og lodret
