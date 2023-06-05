API USERS

POST: http://localhost:3000/api/users
Body:
- email: string - почта пользователя
- password: string - пароль пользователя
- user_name: string - имя пользователя
- avatar: string - ссылка на аватар
Описание: добавить пользователя

GET: http://localhost:3000/api/users
Описание: получить всех пользователей

GET: http://localhost:3000/api/users/:id
Params:
- id: number - идентификатор пользователя
Описание: получить пользователя

PUT: http://localhost:3000/api/users
Body:
- id: number - идентификатор пользователя
- user_name: string - имя пользователя
Описание: модифицирует пользователя

DELETE: http://localhost:3000/api/users/:id
Params:
- id: number - идентификатор пользователя
Описание: удаляет пользователя


API MOVIES

POST: http://localhost:3000/api/movies
Body:
- user_id: number - идентификатор пользователя
- kp_id: number - идентификатор видео в кинопоиске
- favorites: boolean - избранное
Описание: добавить видео

GET: http://localhost:3000/api/movies
Описание: получить все видео

GET: http://localhost:3000/api/movies/:id
Params:
- id: number - идентификатор видео
Описание: получить видео

PUT: http://localhost:3000/api/movies
Body:
- id: number - идентификатор видео
- favorites: boolean - избранное
Описание: модифицирует видео

DELETE: http://localhost:3000/api/movies/:id
Params:
- id: number - идентификатор видео
Описание: удаляет видео


API EPISODES

POST: http://localhost:3000/api/episodes
Body:
- user_movie_id: numder - идентификатор видео
- season: number - номер сезона
- watched: boolean - просмотрено
Описание: добавить эпизод

GET: http://localhost:3000/api/episodes
Описание: получить все эпизоды

GET: http://localhost:3000/api/episodes/:id
Params:
- id: number - идентификатор эпизода
Описание: получить эпизод

PUT: http://localhost:3000/api/episodes
Body:
- id: number - идентификатор эпизода
- watched: bool - просмотрено
Описание: модифицирует эпизод

DELETE: http://localhost:3000/api/episodes/:id
Params:
- id: number - идентификатор эпизода
Описание: удаляет эпизод