# Question 12

## JS

### Show and explain the concept of promises in JavaScript.

* Et Promise i JavaScript er en måde at håndtere asynkrone operationer på. Det er som et løfte om, at en opgave vil blive færdig i fremtiden, enten med succes (løftet opfyldes) eller med en fejl (løftet brydes)
* Der er 3 slags tilstande et Promise kan være i:
  * Pending: Løftet er ikke opfyldt eller brudt endnu. Det venter på at blive færdiggjort.
  * Fulfilled: Løftet er opfyldt, og vi har fået det forventede resultat.
  * Rejected: Løftet er brudt, og der er opstået en fejl

For et eksempel brug addRecipe.jsx - handleSubmit funktionen(linje39):
* Promise Oprettelse: En promise oprettes, når du kalder en funktion, der returnerer en promise, såsom uploadFile(file) eller addRecipe(...). Opretter et promise når vi bruger async 
* Pending: Når en promise oprettes, starter den i "pending" tilstand. Det betyder, at operationen er i gang, men endnu ikke afsluttet. 
* Fulfilled: Hvis operationen lykkes, går promisens tilstand til "fulfilled", og den returnerer en værdi. Dette håndteres med await i vores kode.
* Rejected: Hvis operationen fejler, går promisens tilstand til "rejected", og den returnerer en fejl. Dette håndteres med catch blokken i vores kode

* Når vi bruger await nøgleordet, venter(pending) vi på, at det promise, som await er bundet til, enten bliver fulfilled eller rejected
    

## REACT

### Provide examples for different ways of doing conditional rendering.

Conditional rendering betyder, at vi viser forskellige ting på skærmen afhængigt af visse betingelser

For conditional rendering bruger vi, if-else statements, Ternary operators, og logical AND(&&)

Ternary operators er en kortere måde at skrive en if-else sætning på.

Vi bruger ternary operators i addRecipe.jsx - linje 32:

setFileLabel(file ? file.name : 'No file chosen');
Hvis en fil er valgt (file er true), sættes etiketten til filens navn (file.name).
Hvis ingen fil er valgt (file er false), sættes etiketten til 'No file chosen'.
Så, funktionen setFileLabel(file ? file.name : 'No file chosen') sørger for, at etiketten altid viser enten navnet på den valgte fil eller en besked om, at ingen fil er valgt

## Security/Routing/Styling

### Describe the purpose of flexbox and grid in css, and show some examples of what can be achieved by applying them.
