# Server Side Project - API Endpoints

Acest proiect oferă un API pentru gestionarea utilizatorilor cu următoarele endpoint-uri:

## Endpoint-uri disponibile

- `GET /users`  
  Returnează lista completă a utilizatorilor cu toate detaliile în forma originală (numele cu litere mici).

- `GET /users/uppercase`  
  Returnează lista completă a utilizatorilor cu numele transformate în majuscule.

- `GET /users/search?name=<nume>`  
  Caută utilizatori după nume (case-insensitive), returnând rezultatele cu numele în forma originală.

- `GET /users/search/uppercase?name=<nume>`  
  Caută utilizatori după nume (case-insensitive), returnând rezultatele cu numele transformate în majuscule.

## Cum să rulezi proiectul

```bash
npm install
npm run start:dev
```

## Exemple de request-uri

- Obține toți utilizatorii:  
  `curl http://localhost:3000/users`

- Obține toți utilizatorii cu numele în majuscule:  
  `curl http://localhost:3000/users/uppercase`

- Caută utilizatori după nume (ex: "victor"):  
  `curl http://localhost:3000/users/search?name=victor`

- Caută utilizatori după nume cu numele în majuscule:  
  `curl http://localhost:3000/users/search/uppercase?name=victor`

## Alte informații

Modelul User conține următoarele câmpuri:  
`id`, `name`, `age`, `weight`, `height`, `bloodType`, `gender`, `countryOfOrigin`, `countryOfResidence`.
