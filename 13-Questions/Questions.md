# Question 13

## JS

### What are higher-order functions in JavaScript and what are the benefits? Show some examples in your own code

* Higher-order functions i JavaScript er funktioner, der enten tager en eller flere funktioner som argumenter, eller returnerer en funktion som resultat
* Javascript har nogen indbyggede higher-order functions, f.eks. map, filter og reduce(Minder meget om Java Streams).

Vi bruger både filter og map funktionerne i UserRecipe.jsx.

I filter function(linje 26): `setRecipes(recipes.filter(recipe => recipe.id !== id));`
* recipes er et array af opskrifter.
* filter er en higher-order function, der tager en callback-funktion som argument
    * En callback-funktion er en funktion, der sendes som argument til en anden funktion og udføres efter den første funktion er færdig.
* For hvert recipe tjekker callback-funktionen, om recipe.id er forskellig fra id (ID'et på den opskrift, der skal slettes)
* Hvis betingelsen recipe.id !== id er sand (dvs. opskriften ikke har det ID, der skal slettes), inkluderes recipe i det nye array
* Hvis betingelsen er falsk (dvs. opskriften har det ID, der skal slettes), inkluderes recipe ikke i det nye array

Resultatet: 
* filter returnerer et nyt array, der kun indeholder de opskrifter, hvis ID ikke matcher id på den slettede opskrift
* Dette nye array sættes som den nye tilstand (recipes) ved hjælp af setRecipes

I map functionen(linje 39) `recipes.map((recipe) => (` - NOTE: Forklar om koden fra linje 38 til linje 48.
*  i map funktionen anvender en funktion på hvert recipe-objekt i recipes-arrayet. For hvert recipe returnerer funktionen et li-element med opskriftens detaljer
*  `key={recipe.id}` bruges til at give hvert li-element en unik nøgle, hvilket er vigtigt for Reacts effektivitet ved opdatering af lister

### REACT

### Show and describe the purpose of props including children.
### Show and explain the role of state in a React component.

## Security/Routing/Styling

### Describe and show the process og login using JWT. What problem does it solve?
