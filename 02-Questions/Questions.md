**Question 2**

**JS**

**What is a callback function in JavaScript and when would you use one?**

* En callback-funktion er en funktion, der sendes som et argument til en anden funktion og kaldes senere, når en bestemt opgave er færdig
* Man ville bruge en callback funktion, når man har brug for at udføre en opgave asynkront, det vil sige, når en opgave tager tid at fuldføre 
For eksempel:
  * Netværksanmodninger
  * Filoperationer
  * Timers
  * Event Handling

**REACT**

**What is JSX? Provide an example.**
    
* JSX står for JavaScript XML. Det er en udvidelse af JavaScript, der tillader os at skrive HTML-lignende kode direkte i JavaScript-filer
* Du kan tage et hvert .jsx fil som eksempel fra eksamensprojektet eller brug dette:

```
import React from 'react';

function MyComponent() {
  return (
      <>
      <h1>Hello, world!</h1>
      <p>This is a JSX example.</p>
      </>
  )
}
```

**How does JSX differ from HTML?**

* I JSX bruger vi className i stedet for class, onClick i stedet onclick osv.
* JSX-koden er indlejret i en JavaScript-funktion
* JSX tillader at blande JavaScript og HTML-lignende syntaks.

**Security/Routing/Styling**
**Describe the purpose of flexbox and grid in css, and show some examples of what can be
achieved by applying them.**
