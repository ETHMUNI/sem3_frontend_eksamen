# **Question 3**

## **JS**
### **What are the purposes and differences between the package.json and package-lock.json files?**

package.json
Formål:
   * En liste over de værktøjer og biblioteker, dit projekt har brug for.
   * Bruges til at fortælle hvilke packages og scripts der skal installeres, når nogen bruger dit projekt.

package-lock.json
Formål: 
   * En detaljeret liste, der præcist viser hvilke versioner af pakkerne, der er installeret.
   * Sikrer, at alle, der bruger dit projekt, får de samme pakker i de samme versioner, så der ikke opstår uventede problemer.

Forklaret i "ikke-kode" termer:
   * Se package.json som en indkøbsliste med fleksible valg, mens package-lock.json er som en kvittering, der viser præcis, hvad der blev købt

## **REACT**
### **Describe the purpose of props in React.**
* Props (properties) i React er en måde at sende data fra en "parent" komponent til en "child" komponent.
* Gør det muligt at tilpasse "child" komponenter med forskellige data. F.eks: 
Parent-Component:
```
function App() {
      return (
        <div>
          <Hilsen navn="Alice" />
          <Hilsen navn="Bob" />
        </div>
      );
    }
```
Child-Component:
```   
function Hilsen(props) {
    return <h1>Hej, {props.navn}!</h1>;
    }
```
Resultat:
Hej, Alice!
Hej, Bob!


### **Explain the role of state in a React component.**
    
* State er en måde at holde styr på data, der kan ændre sig. Når state ændres, opdateres komponenten automatisk, så den altid viser de nyeste data

## **Security/Routing/Styling**
### **Describe conceptually how we deploy a React frontend application to a docker container on a virtual machine.**

Kort opsumering af deployment:
Part 1: Forberedelse og Backend
    1. Opret en Dockerfil for backend og opsæt GitHub Actions (build.yml) til at bygge og pushe Docker image til Docker Hub.
    2. Opsæt en DigitalOcean droplet med Docker og Docker Compose.
Part 2: Frontend Deployment
    1. Opret en Dockerfil for frontend, byg image, og brug GitHub Actions til at pushe til Docker Hub.
    2. Opsæt en Docker Compose fil på droplet for at køre frontend og backend services.
Part 3: Traefik Setup
    1. Konfigurer Traefik som reverse proxy på droplet.
    2. Opret nødvendige filer og mapper (acme.json, .env, docker-compose.yml).
    3. Start services med docker-compose up -d.

Ekstra forklaringer:
Docker:
* Docker Image: indeholder alt, hvad der er nødvendigt for at køre en applikation, inklusiv kode, runtime, biblioteker og indstillinger. Man bruger et image til at skabe containere. Tænkt på det som en fast skabelon med alt, hvad en applikation behøver
* Docker Container: En kørende instans af et Docker image. Fungerer som en lille, isoleret virtuel maskine, der kører en applikation, ergo en kørende version af skabelonen.
* Docker Compose fil: En fil, hvor du kan definere og styre flere Docker containere, som skal køre sammen. Tænk på det som en plan, der beskriver, hvordan flere containere skal starte og kommunikere med hinanden.

Droplet: 
* En DigitalOcean Droplet er en virtuel server, du kan bruge til at køre dine applikationer på internettet

Proxy:
* En server, der videresender forespørgsler fra klienter til andre servere.
* Hjælper med at skjule klientens IP-adresse og kan filtrere indhold
Reverse Proxy: 
* En server, der videresender forespørgsler fra klienter til flere backend servere
* Traefik som Reverse Proxy: 
  * Traefik styrer netværkstrafik effektivt og sikrer, at applikationerne kører problemfrit og sikkert.
  * Finder automatisk systemer: Automatisk opdager og konfigurerer kørende applikationer (f.eks. Docker containere).       
  * SSL management: Håndterer SSL-certifikater for sikre forbindelser.
  * Trafik Routing: Sender anmodninger fra brugere til de rigtige systemer
  * Load balancing: Fordeler trafik jævnt mellem servere for at optimere ydeevnen.
    
acme.json fil:
* En acme.json fil bruges af Traefik til at gemme SSL-certifikater
    * SSL-certifikater: Bruges til at sikre forbindelser mellem brugere og servere.
    


    
    
