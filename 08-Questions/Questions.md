# Question 8

## JS

### Explain the concept of event bubbling in JavaScript.
* Event bubbling: En event, som f.eks. et klik, starter på det element, hvor den blev udløst, og "bobler" derefter op gennem forældre- og forfædre-elementerne.
* En fordel kunne være at man gør det muligt at håndterer events på et højere niveau i DOM'en, hvilket kan resulterer i mindre kode

## REACT

### What is the purpose of the key attribute in React lists?
* Formål med key: Hjælper React med at identificere, hvilke elementer i en liste der er blevet ændret, tilføjet eller fjernet
* Gør det muligt for React at opdatere UI mere effektivt ved kun at ændre de elementer, der er nødvendige

### Explain how the map function is used for rendering lists in React.
1. Du har et array af data, som du vil vise i brugergrænsefladen.
2. Du bruger map funktionen til at løbe gennem hvert element i arrayet og skabe en ny liste af React-komponenter.
3. Den nye liste af React-komponenter bliver derefter rendere i UI.

Eksempel:
```
function NameList(props) {
  return (
    <ul>
      {props.names.map((name) => (
        <li key={name.id}>{name.value}</li>
      ))}
    </ul>
  );
}

```

## Security/Routing/Styling
### Describe conceptually what HTTPS is and how we got it working on our deployed websites.
