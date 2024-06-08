# Question 11

## JS

### Show and explain the difference between synchronous and asynchronous programming and how async and await fit into this?

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

## REACT

### Show and explain the purpose of lifting state up in React.

* I React betyder lifting state up, at man flytter state (dvs. data og tilhørende funktioner) fra en komponent til en fælles overordnet komponent(parent), så den kan deles af flere underkomponenter(children).

For eksempel brug App.jsx og Login.jsx

Login.jsx
* I Login-komponent modtager en setIsAuthenticated prop.
* I denne komponent håndteres tilstanden for username, password, og error lokalt. Når login-forsøget er vellykket, opdateres setIsAuthenticated, som er løftet op til en højere niveau komponent

App.jsx
* Her opbevares tilstanden isAuthenticated i App-komponenten, og den bliver delt ned til Login-komponenten gennem setIsAuthenticated-proppen.
* Dette betyder, at når Login-komponenten opdaterer autentificeringstilstanden, vil denne ændring blive reflekteret i hele applikationen, især i NavigationBar-komponenten, som viser forskellige links afhængigt af, om brugeren er logget ind eller ej.



## Security/Routing/Styling

### Show how you can use flexbox in Styled-Components.

* For at bruge Flexbox med Styled-Components i React, definerer vi CSS-egenskaber direkte i vores styled-components.

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


