# **Question 7**

## **JS**

### **What is the purpose of the window object in JavaScript?**

* Formålet med window-objektet i JavaScript er at repræsentere browserens vindue, hvor websiden vises. Det fungerer som den øverste container for alle andre objekter i en webside, såsom dokumentet (websiden selv), historik, placering (URL), browserens historik, osv.
* window er det øverste niveau objekt i en webside. Det betyder, at alle andre objekter, som f.eks. document, location, og history, er en del af window-objektet

## **REACT**

### How are events handled in React compared to vanilla javascript?
Vanilla Javascript:
* Tilføjer event listeners med `addEventListener` og bruger små bogstaver med f.eks. "click"

Eksempel:
```
<button id="minKnap">Klik mig</button>
<script>
  document.getElementById("minKnap").addEventListener("click", function() {
    alert("Knap klikket!");
  });
</script>

```

React:
* Håndterer events i JSX med camelCase (onClick) og bruger funktionsreferencer

Eksempel:

```
import React from 'react';

function MinKomponent() {
  function handleClick() {
    alert("Knap klikket!");
  }

  return (
    <button onClick={handleClick}>Klik mig</button>
  );
}

export default MinKomponent;
```
* I React er eventhåndtering integreret i komponentens struktur, hvilket gør det mere organiseret og lettere at vedligeholde sammenlignet med vanilla JavaScript

### Show examples of how to handle form submit events, and how to handle input change events.
Kig på addRecipes.jsx:

Form submit events:
* Form submit events håndteres med en handleSubmit funktion, der kaldes, når brugeren trykker på "submit" knappen. I koden ovenfor er handleSubmit defineret på linje 31 og bruges på linje 53.
Eksempel:
* Når brugeren indsender formularen, kaldes handleSubmit, tilføjer opskriften og navigere til en anden side

```
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = await addRecipe(
      recipe.name,
      recipe.category,
      recipe.ingredients,
      recipe.instructions,
      imageUrl
    );
    console.log('Recipe added successfully:', data);
    setUpdated(!updated);
    setRecipe(initialRecipe);
    navigate('/food-recipe');
  } catch (error) {
    console.error('Error adding recipe:', error);
  }
};

```
Input change events:
* Input change events håndteres med en handleChange funktion, der opdaterer komponentens state, når brugeren ændrer værdier i inputfelter. handleChange funktionen er defineret på linje 20 og bruges i flere inputfelter.
Eksempel:
* Når brugeren skriver i et inputfelt, kaldes handleChange for at opdatere state med den nye værdi for opskriftens titel, kategori, ingredienser og instruktioner
* Bemærk at der bruges spread operator(...recipes). Dette skaber en kopi af det nuværende recipe objekt. Dette sikrer, at vi ikke direkte muterer det eksisterende state, hvilket er vigtigt i React for at bevare state-håndteringen korrekt

```
const handleChange = (e) => {
  setRecipe({ ...recipe, [e.target.id]: e.target.value });
};
```


## Security/Routing/Styling

### Describe and show how we log in a user in React with JWT.

1. Brugeren indtaster deres email og adgangskode
2. Sender en anmodning af brugeren oplysningerne til serveren
3. Hvis brugeren godkendes, sender serveren et JWT(JSON Web Token) tilbage
4. Opbevar JWT'et i vores local storage for at bruge det til autentificeret HTTP-anmodninger til vores endpoints fremover
5. Inkluder JWT i vores headers på fremtidige HTTP-anmodninger for at få adgang til beskyttede API'er, såsom vores endpoints.
* Headers: I vores tilfælde i adminapi.js bruger vi kun Request headers og ingen Response headers.
  * `'Authorization': `Bearer ${token}'` - bruges i alle funktioner til at sende JWT for autentificering.
  * `'Content-Type': 'application/json'` - bruges i getAllUsers, deleteUser, addRoleToUser, deleteComment, og deleteRecipe til at angive, at body'en er i JSON-format
  * `'Cache-Control': 'no-cache'` - Cache-Control: Bruges i getAllUsers til at instruere serveren om ikke at cache anmodningen. Dette betyder, at du instruerer serveren om at sikre, at dataene er opdaterede og ikke blot sende en gammel, cachet version.
