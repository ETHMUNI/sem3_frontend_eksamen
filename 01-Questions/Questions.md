# **Question 1**

## **JS**
### **What are higher-order functions in JavaScript? Give an example.**

## **REACT**
### **What is a React component?**
* Et React komponent er en genanvendelig kode der definerer, hvordan en del af brugergrænsefladen(UI) skal se ud og opfører sig. Hver komponent har typisk sin egen logik og state, og det
    kan tage et parameter/argument kaldet props. Et React komponent returnere elementer, som beskriver, hvad der skal vises på skærmen.

    Eksempel på en React komponent:
  
    ```
    import React from 'react'
    
    function MyComponent() {
      return <div>Hello!</div>
    }

### **Explain the benefits of using components compared to how you would build a web application in
vanilla javascript.**

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
### **Explain what React Router is and its purpose in a React application.**

* React Router er et populært bibliotek til styring af routing i React-applikationer.
* React Router gør det muligt at vise forskellige komponenter afhængigt af, hvilken URL brugeren besøger
* Det betyder, at når brugeren skriver en bestemt URL i adresselinjen viser React Router den rigtige komponent eller side uden at genindlæse siden.
    

### **Show an example of how routing works in React.**
    
* For at finde Routing i Projektet gå src -> App.jsx
    Linje 29 til Linje 44:
    
* `<Router>` -  Dette er hovedkomponenten, der håndterer al routing (navigering) i appen. Holder styr på, hvilken URL der er aktiv.
* `<NavigationBar/>` - Dette er en navigationsmenu, der altid vises.
* `<Routes>` - Dette er en container for alle routes i appen. Den definerer, hvilke komponenter der skal vises for forskellige URL'er.
* isAuthenticated er en prop som angiver om brugeren er logget ind eller ej
* Protected Routes beskytter bestemte routes. Kun brugerer som er logget ind kan få adgang til disse routes.
    
    
