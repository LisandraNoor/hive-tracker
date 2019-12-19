# hive-tracker
lõputöö

### Projekti käivitamine
Projekti käivitamiseks navigeerida terminalist client kausta
```
cd client
```
Avada teine terminal ning navigeerida server kausta
```
cd server
```

Serveri käivitamisel võib tekkida probleem pordi numbri suhtes. Pordi numbrit on võimalik muuta config/config.js failis muutes järgmist koodi rida:
````
port: process.env.PORT || 8081
```