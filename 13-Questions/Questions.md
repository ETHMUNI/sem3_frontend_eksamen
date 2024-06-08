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

### Show and describe the purpose of props including children
* Props (properties) i React er en måde at sende data fra en "parent" komponent til en "children" komponent.
* Gør det muligt at tilpasse "child" komponenter med forskellige data.

For et eksempel brug Navbar.jsx(children) og App.jsx(parent)

Navbar.jsx:
* Props bliver brugt til at sende isAuthenticated til NavBar-komponenten(linje 8) `function NavigationBar({ isAuthenticated }) {`
* isAuthenticated-proppen bruges til at betinge rendering af forskellige elementer i navigationen
* i linje 29, 30 & 31: bliver linkene til "My Profile", "Add Recipe" og "Admin" kun vises, hvis isAuthenticated er true (dvs. brugeren er logget ind)

App.jsx:
* isAuthenticated kommer fra vores parent komponent(App.jsx). I App.jsx defineres isAuthenticated som en state-variabel og sendes derefter som prop til NavBar.jsx
* useState bruges til at oprette isAuthenticated, der initialiseres baseret på, om der er en token i localStorage
* isAuthenticated sendes som en prop til NavBar komponenten. Dette betyder, at NavBar komponenten kan bruge denne prop til at afgøre, hvilke elementer der skal vises, baseret på om brugeren er autentificeret eller ej.


### Show and explain the role of state in a React component.
* State er en måde at holde styr på data, der kan ændre sig. Når state ændres, opdateres komponenten automatisk, så den altid viser de nyeste data

For et eksempel brug App.jsx:
* Initialisering af state: isAuthenticated er en state variabel, der starter med værdien true, hvis der er en token i localStorage, ellers false. setIsAuthenticated er en funktion, der bruges til at opdatere isAuthenticated
* Opdatering af state: handleLogout funktionen opdaterer isAuthenticated til false og rydder localStorage, når brugeren logger ud.
* Brug af state i komponent: isAuthenticated sendes som en prop til NavigationBar-komponenten, så den kan vise forskellige elementer baseret på, om brugeren er logget ind eller ej(linje 32)

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
