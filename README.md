Kako pokrenuti testnu verziju aplikacije (AIEdu)Aplikacija se sastoji od dva dijela:Frontend → React aplikacija (korisnički interfejs)
Backend → Node.js + Express server (prijava, registracija, itd.)

Oba dijela moraju biti pokrenuta istovremeno.1. Preduvjeti (jednom se radi)Treba da imaš instalirano na računaru:Node.js (verzija 16 ili novija) → https://nodejs.org/
npm (dolazi zajedno sa Node.js-om)
Git (ako preuzimaš projekat sa repozitorija)

Provjeri da li već imaš:bash

node -v
npm -v

2. Preuzmi projekat (ako još nije na tvom računaru)bash

git clone <link-do-repozitorija>
# ili ako si već dobio zip fajl:
# raspakuj zip u folder npr. C:\AIEdu ili ~/Desktop/AIEdu

3. Pokretanje BACKEND-aOtvori terminal / PowerShell / Command Prompt
Uđi u backend folder:bash

cd AIEdu/backend
# ili gdje god ti je backend folder

Instaliraj potrebne pakete (samo prvi put):bash

npm install

Pokreni server:bash

node index.js
# ili ako imaš nodemon instaliran:
# nodemon index.js

Trebalo bi da vidiš poruku:

Server running on http://localhost:5000

→ Ostavi ovaj terminal otvoren!4. Pokretanje FRONTEND-aOtvori novi terminal (drugi prozor)
Uđi u frontend folder:bash

cd AIEdu/frontend

Instaliraj pakete (samo prvi put):bash

npm install

Pokreni React aplikaciju:bash

npm start

Trebalo bi da se sam otvori pregledač na adresi:
http://localhost:3000→ Ostavi i ovaj terminal otvoren!5. TestiranjeIdi na http://localhost:3000
Trebalo bi da vidiš login stranicu
Možeš se registrirati → zatim prijaviti
Nakon uspješne prijave treba da te prebaci na početnu stranicu (/home)

Brzi pregled – šta radiš kad god želiš pokrenuti aplikacijuTerminal 1 → cd backend → node index.js
Terminal 2 → cd frontend → npm start

To je to.Najčešći problemi i rješenjaProblem
Rješenje
"command not found: node"
Instaliraj Node.js
Port 3000 ili 5000 je zauzet
Zatvori drugi program koji koristi taj port ili promijeni port u kodu
"Cannot find module ..."
Uradi npm install u tom folderu
Login ne radi (401 greška)
Provjeri da li je backend pokrenut i da koristiš tačne podatke
Pregledač ne otvara localhost:3000
Ručno otvori http://localhost:3000 u Chrome/Firefox

Ako nešto ne radi – slikaj grešku iz terminala i pošalji mi.Ugodno testiranje!
Ako budeš imao pitanja ili problema – javi se.

