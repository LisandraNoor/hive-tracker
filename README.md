# hive-tracker
lõputöö

### Projekti käivitamine
Projekti käivitamiseks navigeerida terminalist client kausta
```
cd client
```
client kasutas käivitada käsk
```
npm run serve
```
Avada teine terminal ning navigeerida server kausta
```
cd server
```
server kasutas käivitada käsk
```
npm start
```
Serveri käivitamisel võib tekkida probleem pordi numbri suhtes. Pordi numbrit on võimalik muuta config/config.js failis muutes järgmist koodi rida:
```
port: process.env.PORT || 8081
```
