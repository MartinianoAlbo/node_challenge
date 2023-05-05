# Challenge Node

This project was developed with a lot of effort and dedication.

## Instructions to get the Node.js API up and running

1. Install the project dependencies by running the `npm install` command.
2. Make a copy of the `env-example` file and rename it to `.env-cmdrc.json`.

`cp env-example .env-cmdrc.json` 

3. For testing, we recommend using **POSTMAN**.

### To start the api, the following commands
`npm run local`

It is important to define previously in the **env-cmdrc.json** file the variables such as the **PORT and the SECRET KEYS**

### Endpoints

1. **Login**: To log in, send a POST request to the URL `http://localhost:3000/api/auth/login` (you can change port 3000 if necessary) with the following JSON object in the request body:

```json
{
  "email": "email@email.com"
}
```

This will return a token that you will use in subsequent requests.

2. **Add a movie**: To add a movie, send a POST request to the URL `http://localhost:3000/api/media/addmovie` with the following JSON object in the body of the request, **director** and **actors** can be **null**:

```json
{
  "title": "Relatos Salvajes",
  "director": "64546af7e9cc1ca3718044e7",
  "actors": [
    "64546af7e9cc1ca3718044e7",
    "54w46af7e9cc1ca37180gwe3",
    "6546af7e9cc1ca37180y479"
  ]
}
```

3. **Fetch movies**: To get a list of movies, send a GET request to the URL ej:

   `http://localhost:3000/api/media/movies?titulo=Relatos-Salvajes&director=Damian-Szifron`

   You can set the **title** and **director** parameters to **null** to get **all** movies ej:

    `http://localhost:3000/api/media/movies?titulo=&director=`

     And if the **director** parameter is sent, it also looks for all the films of that director.

4. **Get a TV show episode**: To get a specific episode of a TV show, send a GET request to the URL

   `http://localhost:3000/api/media/tvshows/:showId/episodes/:episodeId`

   replacing `:showId` and `:episodeId` with the corresponding values.


## Thanks!

Thank you for using API and for you time!
