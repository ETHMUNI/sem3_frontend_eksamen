# **Question 3**

## **JS**
### What is the purpose of the package.json file and what can you do with it?

package.json
Formål:
   * En liste over de værktøjer og biblioteker, dit projekt har brug for.
   * Bruges til at fortælle hvilke packages og scripts der skal installeres, når nogen bruger dit projekt.

Brug:
* package.json beskriver dit projekt.
* Den holder styr på nødvendige biblioteker (dependencies).
* Den definerer scripts til almindelige kommandoer.
* Den hjælper med at sikre konsistens og gør det nemt at dele og installere dit projekt.

* Med package.json kan du hurtigt installere alle nødvendige biblioteker med én kommando `npm install`, og andre udviklere kan forstå og arbejde med dit projekt lettere

Ekstra:

package-lock.json
Formål: 
   * En detaljeret liste, der præcist viser hvilke versioner af pakkerne, der er installeret.
   * Sikrer, at alle, der bruger dit projekt, får de samme pakker i de samme versioner, så der ikke opstår uventede problemer.

Forklaret i "ikke-kode" termer:
   * Se package.json som en indkøbsliste med fleksible valg, mens package-lock.json er som en kvittering, der viser præcis, hvad der blev købt

## **REACT**
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

## **Security/Routing/Styling**
### **Describe conceptually how we deploy a React frontend application to a docker container on a virtual machine.**

Kort opsumering af deployment:

Part 1: Forberedelse og Backend
  1. Opret en Dockerfil for backend og opsæt GitHub Actions (build.yml) til at bygge og pushe Docker image til Docker Hub.
  2. Opsæt en DigitalOcean droplet med Docker og Docker Compose.

Part 2: Frontend Deployment

  3. Opret en Dockerfil for frontend, byg image, og brug GitHub Actions til at pushe til Docker Hub.
  4. Opsæt en Docker Compose fil på droplet for at køre frontend og backend services.

Part 3: Traefik Setup
  5. Konfigurer Traefik som reverse proxy på droplet.
  6. Opret nødvendige filer og mapper (acme.json, .env, docker-compose.yml).
  7. Start services med docker-compose up -d.

## **Ekstra forklaringer:**

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
    


    
    
