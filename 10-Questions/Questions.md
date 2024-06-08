# Question 10

## JS

### What is the spread operator in JavaScript and how does it differ from the rest operator?

Spread operator
* Den spreder elementerne ud. Det bruges ofte til at kopiere arrays eller kombinere arrays/objekter

Rest operator:
* Den samler flere argumenter i en enkelt array. Det bruges ofte i funktioner

For et eksempel brug addRecipe.jsx:
* I vores kode bruger vi spread operatoren (...) til at kopiere og opdatere objekter. For eksempel, når vi opdaterer recipe objektet i `handleChange` og `handleCategoryChange`.
* Her bruges `...recipe` til at sprede alle de eksisterende egenskaber i recipe objektet ud, og derefter opdatere den specifikke egenskab (`[e.target.id]` eller `category`) med den nye værdi. Dette sikrer, at de øvrige egenskaber i recipe forbliver uændrede

## REACT

### What are React Hooks? Provide examples of at least two built-in hooks.

Forklaringer:
* Hooks gør det muligt at bruge React-funktioner som state og sideeffekter i funktionskomponenter. useState holder styr på data (f.eks. en liste af opskrifter), og useEffect udfører handlinger, når komponenten indlæses eller ændres (f.eks. henter data fra en server)
* Før Hooks blev introduceret i React 16.8, kunne man kun bruge state og livscyklusmetoder i klassekomponenter
* Hooks gør det lettere at dele logik mellem komponenter og gør koden mere læsbar og nemmere at vedligeholde

For eksempel brug UserRecipe.jsx:

useState:
* Denne hook bruges til at tilføje state i en funktionskomponent. Den returnerer et array med to elementer: den aktuelle state-værdi og en funktion til at opdatere denne værdi.
* I dette eksempel(linje 8) initialiseres recipes med en tom array, og setRecipes bruges til at opdatere recipes

useEffect: 
* Denne hook bruges til at udføre sideeffekter i funktionskomponenter, såsom datahentning og manuelt at ændre DOM'en. Den fungerer som en kombination af componentDidMount, componentDidUpdate og componentWillUnmount i klassekomponenter. Disse er livscyklusmetoder.
* I vores eksempel henter useEffect data, når komponenten bliver renderet første gang (takket være den tomme array [] som anden argument). getRecipes-funktionen henter opskrifter fra vores server, som henter data fra databasen baseret på brugerens email

### Show example of how you handle errors in React.

Hvis vi går tilbage til addRecipe.jsx:

1. Først definerer vi en state errorMessage til at gemme fejlmeddelelser(linje 8)
2.  Når vi sender data til serveren, bruger vi en try...catch blok for at fange og håndtere eventuelle fejl, der måtte opstå under processen. F.eks. i vores handleSubmit event handler(linje 39).
  * Der er tilføjet en `setErrorMessage` så vi opdateret state så brugeren også kan se fejl koden. `setErrorMessage('There was an error adding the recipe. Please try again.'); // tilføjet så brugeren kan se fejl beskeden`
3. Vi kan vise fejlmeddelelser til brugeren ved at tilføje en betinget rendering, der viser en besked, hvis errorMessage har en værdi(linje 82)

## Security/Routing/Styling
### Describe conceptually what Same Origin Policy (SOP) and Cross Origin Ressource Sharing (CORS) are, and howSwe avoid getting CORS errors when fetching data from your API.

Same Origin Policy (SOP):
* Dette er en sikkerhedsregel, der forhindrer en webside i at anmode om data fra en anden webside, medmindre de to websider har samme oprindelse. Oprindelse betyder her samme domæne, protokol (f.eks. http eller https) og portnummer. Det hjælper med at beskytte brugerne mod angreb

Cross Origin Resource Sharing (CORS):
* Dette er en mekanisme, der tillader en webside at anmode om data fra en anden webside, selvom de har forskellige oprindelser. For at dette skal virke, skal serveren (som indeholder de ønskede data) specificere, at den tillader anmodninger fra en bestemt oprindelse (eller alle oprindelser) gennem CORS-overskrifter

* Vi har undgået cors fejl ved at aktiverer cors i vores backend(ApplicationConfig).
* Så længe at vores cross origin anmodninger kommer fra altinkaya.dk, vil vi ikke få nogen problemer.
* Selvom vores sub-domæner er forskellige(opg. api1. og så videre) kan vi godt anmode om data så længe at hoved domænet(altinkaya) er ens.
