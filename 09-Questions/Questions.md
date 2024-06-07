# Question 9

## JS

### What is the scope of a variable in JavaScript? Explain the difference between global and local scope.
* scope af en variabel i JavaScript bestemmer, hvor i koden variablen kan tilgås eller bruges. Der er to hovedtyper af rækkevidde: global og lokal.

Global scope:
* En variabel har global rækkevidde, hvis den er erklæret uden for nogen funktion eller blok. Den kan tilgås fra enhver del af koden
* Globale variabler eksisterer så længe programmet kører.

Local scope:
* En variabel har lokal rækkevidde, hvis den er erklæret inde i en funktion eller blok. Den kan kun tilgås inden for denne funktion eller blok
* Lokale variabler eksisterer kun så længe funktionen eller blokken kører

## REACT

### Show and explain how controlled components are different from uncontrolled components in React forms?

Controlled Components:
* I controlled komponenter, kontrolleres inputfeltets værdi af React's state. Værdien af inputfeltet opdateres af React, og enhver ændring i inputfeltet opdaterer også React's state
* Bruger useState til at styre inputværdier gennem React's state

Uncontrolled Components:
* I uncontrolled komponenter, håndterer DOM selv inputfeltets værdi. I stedet for at bruge React's state til at styre værdien, bruger du en ref til at få adgang til inputfeltets værdi, når det er nødvendigt.
* bruger useRef til at få adgang til inputværdier direkte fra DOM-elementer.

Tommelfinger regel:
* Du bruger `useState` i controlled komponenter og `useRef` i uncontrolled komponenter

For eksempel har jeg taget vores addRecipe.jsx(controlled component) og lavet om til en uncontrolled component.
UncontrolledAddRecipe.jsx:
* Vi bruger useRef hooks til at oprette referencer til inputfelterne
* Funktionen handleSubmit bruger referencerne til at hente værdierne fra inputfelterne og oprette opskriften. I stedet for at kalde og opdaterer recipe objektet. 
* Ingen onChange på Tekstfelter: Vi bruger ikke onChange på tekstfelterne, fordi vi ikke opdaterer React state. I stedet læser vi værdierne direkte fra DOM'en ved indsendelse
* Filhåndtering: onChange bruges kun til filinput for at vise en forhåndsvisning af det valgte billede. Dette er en undtagelse, fordi vi vil opdatere en visuel komponent (billedet)

## Security/Routing/Styling

### Show and explain an example of sub-routing.
* Sub-routing betyder at have ruter inden i andre ruter. Dette er nyttigt, når du har en hovedrute og flere undersektioner, du vil navigere mellem inden for denne hovedrute.

* For eksempel brug App.jsx og Dashboard.jsx(eksempel:
* Originalt har vi ikke sub-routing inde i App.jsx, jeg har defor tilføjet et dashboard eksempel på hvordan dette kan se ud.

App.jsx:
* Vi har tilføjet en rute til Dashboard komponenten: `<Route path="/dashboard/*" element={<Dashboard />} />`.

Dashboard.jsx:
* Dashboard komponenten indeholder sin egen navigation med links til Profile og Settings.
* Inden for Dashboard komponenten bruger vi Routes og Route til at definere sub-ruterne.

Sub-routing:
* Dashboard komponenten viser Profile og Settings komponenterne afhængigt af den aktuelle sub-rute.
* Links i Dashboard navigerer til Profile og Settings sub-ruterne ved hjælp af Link komponenten.

