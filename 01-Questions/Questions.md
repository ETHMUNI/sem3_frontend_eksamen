# **Question 1**

## **JS**
### What are higher-order functions in JavaScript and what are the benefits? Show some examples in your own code.
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

## **REACT**
### What is the main concept of an React component and what are its different building blocks?
* Et React komponent er en genanvendelig kode der definerer, hvordan en del af brugergrænsefladen(UI) skal se ud og opfører sig. Den kan f.eks. være en knap, tekstboks osv.
Vigtige building blocks:
* JSX: En syntaks, der ligner HTML, men bruges i JavaScript til at beskrive, hvordan UI'en skal se ud
* State: data i komponenten, som kan ændres over tid og påvirker, hvordan komponenten renderes
* Props: Data, der sendes til komponenten udefra(parent til children komponent), hvilket gør det muligt at tilpasse og genbruge komponenten med forskellige værdier.

### Explain the benefits of using components compared to how you would build a web application in vanilla javascript.

React Komponenter: 
   * Genanvendelige: F.eks. Hvis du laver en knap-komponent, kan du bruge den samme knap på forskellige sider eller dele af din app uden at kopiere og indsætte koden
   * Organiserede: Du deler din app op i små, overskuelige dele. Ergo gør det nemmere at finde fejl
   * Nemmere at vedligeholde: Hvis du laver en ændring i en komponent, påvirker det kun den komponent.
   * Har indbygget state håndtering: React tager sig af at opdatere DOM'en. Ergo behøver du ikke at skrive så meget manuel DOM-manipulation.

Vanilla JavaScript: 
   * Mere manuelt arbejde: Du skal kopiere og indsætte koden for f.eks. knappen hver gang du har brug for den. Hvis du vil ændre noget ved knappen senere, skal du finde alle steder
   * Kan blive rodet og sværere at vedligeholde: Din kode kan hurtigt blive rodet og svær at finde rundt i, især når din app bliver stor, fordi alt koden er typisk i få store filer.
   * Ingen indbygget state håndtering: Du skal selv holde styr på tilstanden og manuelt opdatere DOM'en.



## **Security/Routing/Styling**
### Explain what React-Router is and which problems does it solve?

* React Router er et populært bibliotek til styring af routing i React-applikationer.
* React Router gør det muligt at vise forskellige komponenter afhængigt af, hvilken URL brugeren besøger. Det betyder, at når brugeren skriver en bestemt URL i adresselinjen viser React Router den rigtige komponent eller side uden at genindlæse siden.

Problemer det som Router løser:
* Navigering mellem sider: Uden React Router skal du bruge traditionelle links, der genindlæser hele siden, når du klikker på dem. React Router gør det muligt at skifte mellem sider hurtigt og uden genindlæsning.
* Dynamiske ruter: Dynamiske ruter: Det giver dig mulighed for at oprette ruter, der kan ændre sig baseret på brugerinput eller data. For eksempel kan du have en side for hver bruger på dit website som `www.dinside.com/brugere/123`, hvor "123" er et bruger-ID.
    

### **Show an example of how routing works in React.**
    
* For at finde Routing i Projektet gå src -> App.jsx
    Linje 29 til Linje 44:
    
* `<Router>` -  Dette er hovedkomponenten, der håndterer al routing (navigering) i appen. Holder styr på, hvilken URL der er aktiv.
* `<NavigationBar/>` - Dette er en navigationsmenu, der altid vises.
* `<Routes>` - Dette er en container for alle routes i appen. Den definerer, hvilke komponenter der skal vises for forskellige URL'er.
* isAuthenticated er en prop som angiver om brugeren er logget ind eller ej
* Protected Routes beskytter bestemte routes. Kun brugerer som er logget ind kan få adgang til disse routes.
* path:
    * Matcher URL'en: path fortæller React Router, hvilken URL-sti der skal matche for at vise en bestemt komponent.
    * Viser den rigtige komponent: Når URL'en matcher path, viser React Router den komponent, der er angivet for den rute.
    
    
