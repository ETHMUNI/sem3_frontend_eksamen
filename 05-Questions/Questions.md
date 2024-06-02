#**Question 5**

##**JS**

###**What is the difference between synchronous and asynchronous programming and how does async and await fit into this?**
Synchronous:
* Programmet udfører én opgave ad gangen og venter, indtil den er færdig, før den går videre til næste opgave

Asynchronous:
* Programmet starter en opgave og fortsætter med andre opgaver, mens den første opgave arbejder i baggrunden. Når den første opgave er færdig, kommer programmet tilbage til den
  * async: Bruges til at sige, at en funktion er asynkron. Det betyder, at den kan gøre flere ting på én gang.
  * await: Bruges til at vente på, at en asynkron opgave er færdig, uden at blokere resten af programmet.

##**REACT**

###**Describe how conditional rendering is achieved in React.**
* Conditional rendering betyder, at vi viser forskellige ting på skærmen afhængigt af visse betingelser
* For conditional rendering bruger vi, if-else statements, Ternary operators, og logical AND(&&)
  
##**Provide an example of using the ternary operator for conditional rendering.**
* Ternary operators er en kortere måde at skrive en if-else sætning på.
* Vi bruger ternary operators i addRecipe.jsx - linje 32:
```
setFileLabel(file ? file.name : 'No file chosen');
```
* Hvis en fil er valgt (file er true), sættes etiketten til filens navn (file.name).
* Hvis ingen fil er valgt (file er false), sættes etiketten til 'No file chosen'.
* Så, funktionen setFileLabel(file ? file.name : 'No file chosen') sørger for, at etiketten altid viser enten navnet på den valgte fil eller en besked om, at ingen fil er valgt

##**Security/Routing/Styling**

###**Describe conceptually the typical flow of using JWTs for user authentication in a React application.**
* JWT står for JSON Web Token og bruges ofte til at autentificere brugere i applikationer

1. Login: Brugeren logger ind og får en JWT.
2. Gem JWT: React appen gemmer JWT'en.
3. Brug JWT: JWT'en sendes med i alle fremtidige anmodninger for at autentificere brugeren.
4. Verificer JWT: Backend serveren tjekker JWT'en og sender svar tilbage, hvis den er gyldig.
