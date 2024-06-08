# Question 12

## JS

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
    

## REACT

### Provide examples for different ways of doing conditional rendering.

Conditional rendering betyder, at vi viser forskellige ting på skærmen afhængigt af visse betingelser

For conditional rendering bruger vi, if-else statements, Ternary operators, og logical AND(&&)

Ternary operators er en kortere måde at skrive en if-else sætning på.

Vi bruger ternary operators i addRecipe.jsx - linje 32:

setFileLabel(file ? file.name : 'No file chosen');
Hvis en fil er valgt (file er true), sættes etiketten til filens navn (file.name).
Hvis ingen fil er valgt (file er false), sættes etiketten til 'No file chosen'.
Så, funktionen setFileLabel(file ? file.name : 'No file chosen') sørger for, at etiketten altid viser enten navnet på den valgte fil eller en besked om, at ingen fil er valgt

## Security/Routing/Styling

### Describe the purpose of flexbox and grid in css, and show some examples of what can be achieved by applying them.

Flexbox og Grid i CSS bruges til at skabe layout på websider. De gør det nemt at arrangere og justere elementer på en fleksibel og responsiv måde
Flexbox:

Formål: At arrangere elementer i en enkelt dimension, enten som en række (vandret) eller kolonne (lodret).
Hvornår man bruger det: Når du vil placere og justere elementer på en fleksibel måde i én retning, f.eks. at centrere indhold eller skabe jævnt fordelte knapper.
Grid:

Formål: At arrangere elementer i to dimensioner, både rækker og kolonner.
Hvornår man bruger det: Når du vil skabe komplekse layouts med både rækker og kolonner, f.eks. et komplet side-layout med header, sidebar, main content og footer

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
