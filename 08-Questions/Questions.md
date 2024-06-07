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
* Tjek for Liste(linje 38): Vi tjekker først, om recipes er en liste og om den har nogen elementer `(Array.isArray(recipes) && recipes.length > 0)`.
* Gennemgå Liste(linje 39): Hvis betingelsen er true, bruger vi map funktionen til at gennemgå hvert recipe (opskrift) i recipes listen.
* Oprette Liste Elementer: For hver recipe i listen, opretter vi et <li> element med indholdet fra recipe.
* Tilføje Unik Key(linje 40): Hvert <li> element får en unik key baseret på recipe.id

## Security/Routing/Styling
### Describe conceptually what HTTPS is and how we got it working on our deployed websites.
