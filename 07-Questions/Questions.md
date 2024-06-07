# **Question 7**

## **JS**

### Show an example of using the window object in JavaScript?
Du kan vise brugen af window i consolen i browersen. window har forskellig funktioner du kan kalde. Her er nogen eksempler:
* `window.alert("du er nu logget ind");`
* `window.open("food-recipe, "_blank);"`
  * `_blank` åbner et nyt vindue. Hvis den skal åbne url'en på samme side brug `_self`.
* `window.scrollTo(0, 0);`

Forklaringer:
* Formålet med window-objektet i JavaScript er at repræsentere browserens vindue, hvor websiden vises. Det fungerer som den øverste container for alle andre objekter i en webside, såsom dokumentet (websiden selv), historik, placering (URL), browserens historik, osv.
* window er det øverste niveau objekt i en webside. Det betyder, at alle andre objekter, som f.eks. document, location, og history, er en del af window-objektet
* Funktioner som localStorage, fetch, sessionStorage er også en del af window objektet.

## **REACT**

### Show and describe event handling in React (with reference to the SyntheticEvent object).
I addRecipe.jsx bruger vi SyntheticEvent flere steder i vores event handlers
Et af eksempel er vores handleChange event(linje 24); 

```
const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.id]: e.target.value });
  };
```
* `handleChange` er en event handler funktion, som bliver kaldt, når en ændring sker i et input felt
* `e` er et SyntheticEvent objekt, som React genererer.
* `e.target` refererer til det DOM element, som udløste eventen. I dette tilfælde er det input feltet, der blev ændret.
* `e.target.id` giver id attributten af det input element, som blev ændret. Dette id bruges til at identificere hvilket felt der blev ændret, f.eks. "name", "category", "ingredients" osv.
* `e.target.value` indeholder den nye værdi af input feltet. Dette er den værdi, som brugeren har indtastet
* Bemærk at der bruges spread operator(...recipes). Dette skaber en kopi af det nuværende recipe objekt. Dette sikrer, at vi ikke direkte muterer det eksisterende state, hvilket er vigtigt i React for at bevare state-håndteringen korrekt

### Show examples of how to handle form submit events, and how to handle input change events.
Kig på addRecipes.jsx:

Form submit events:
* Form submit events håndteres med en handleSubmit funktion, der kaldes, når brugeren trykker på "submit" knappen. I koden er handleSubmit defineret på linje 31 og bruges på linje 53.
* Når brugeren indsender formularen, kaldes handleSubmit, tilføjer opskriften og navigere til en anden side
Eksempel:
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
* Når brugeren skriver i et inputfelt, kaldes handleChange for at opdatere state med den nye værdi for opskriftens titel, kategori, ingredienser og instruktioner
* Bemærk at der bruges spread operator(...recipes). Dette skaber en kopi af det nuværende recipe objekt. Dette sikrer, at vi ikke direkte muterer det eksisterende state, hvilket er vigtigt i React for at bevare state-håndteringen korrekt
Eksempel:
```
const handleChange = (e) => {
  setRecipe({ ...recipe, [e.target.id]: e.target.value });
};
```

## Security/Routing/Styling

### Describe and show the process og login using JWT. What problem does it solve?

* Hvilket problem løses der med JWT?
* Sikkerhed: JWT kan signeres og krypteres, hvilket gør det vanskeligt for uautoriserede parter at ændre eller læse tokenet. Derudover kan tokenet konfigureres til at udløbe efter en bestemt tid, hvilket begrænser virkningen af et kompromitteret token.
*  Single Sign-On (SSO): JWT gør det nemt at implementere SSO, fordi tokenet kan bæres mellem forskellige services og domæner, der alle kan stole på den samme signatur til at verificere tokenet.

1. Brugeren indtaster deres email og adgangskode
2. Sender en anmodning af brugeren oplysningerne til serveren
3. Hvis brugeren godkendes, sender serveren et JWT(JSON Web Token) tilbage
4. Opbevar JWT'et i vores local storage for at bruge det til autentificeret HTTP-anmodninger til vores endpoints fremover
5. Inkluder JWT i vores headers på fremtidige HTTP-anmodninger for at få adgang til beskyttede API'er, såsom vores endpoints.

Ekstra:
* Headers: I vores tilfælde i adminapi.js bruger vi kun Request headers og ingen Response headers.
  * `'Authorization': Bearer ${token}'` - bruges i alle funktioner til at sende JWT for autentificering.
  * `'Content-Type': 'application/json'` - bruges i getAllUsers, deleteUser, addRoleToUser, deleteComment, og deleteRecipe til at angive, at body'en er i JSON-format
  * `'Cache-Control': 'no-cache'` - bruges i getAllUsers til at instruere serveren om ikke at cache anmodningen. Dette betyder, at du instruerer serveren om at sikre, at dataene er opdaterede og ikke blot sende en gammel, cachet version.
