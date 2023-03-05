
# Dockerize Django with Nextjs

A Bootstrapped Template of Django with Nextjs using Docker!

## Stack

- [Next Js](https://www.nextjs.org/) - The React  Framework  for the Web.
- [Django](https://www.djangoproject.com/) - Django makes it easier to build better web apps more quickly and with less code.
- [Typescript](https://www.typescriptlang.org/) - JavaScript with syntax for types.
-  [Docker](https://www.docker.com/)  - Docker is a platform designed to help developers build, share, and run modern applications. We handle the tedious setup, so you can focus on the code.
- [Nginx](https://www.nginx.com/) - Advanced Load Balancer, Web Server, & Reverse Proxy.


## Project structure

```
$PROJECT_ROOT
│  
├── apps/web  # Django Backend
│  
├── apps/docker  # Docker files for web, www, nginx
│  
├── apps/www  # Nextjs App
│   
├── apps/web/requirements # Python Requirements
│
├── app.py # Entry Point for Django Backend
│
├── apps/web/manage.py # Run Django Commands
│
├── apps/www/package.json # npm commands.
```
---

### Get the Code

- Clone Repo

```bash
mkdir dockerize-django-with-nextjs
cd dockerize-django-with-nextjs
git clone https://github.com/codingforinnovations/dockerize-django-with-nextjs .
```
- Using Docker

```docker
docker-compose up --build
```

_Open [Django Server](http://0.0.0.0:8000)  in : [http://0.0.0.0:8000](http://0.0.0.0:8000)_  <br/>

_Open [Django Admin](http://0.0.0.0:8000/admin)  in : [http://0.0.0.0:8000/admin](http://0.0.0.0:8000/admin)_  <br/>

_Open [Nextjs Server](http://0.0.0.0)  in : [http://0.0.0.0](http://0.0.0.0)_  <br/>



## Manual  Way:

#### For Django:
- Create Virtual Environment for Python

```bash
pip install virtualenv
python -m venv .
```

- Activate Virtual Environment

```bash
source Scripts/activate
```
**Window Users use: `.\Scripts\activate`**

- Install Dependencies

```bash
pip install -r apps/web/requirements.txt
```

- Make Migrations

```bash
python manage.py apps/web/makemigrations
python manage.py apps/web/migrate
```

####  For Frontend

- Install Dependencies

```bash
npm install --prefix apps/www
```

- Run Dev Server

```bash
npm run dev
```

- Now for Bundling Your Frontend 

```bash
npm run build
```

## LICENSE:

[MIT LICENSE](https://github.com/codingforinnovations/dockerize-django-with-nextjs/blob/main/LICENSE) .

## Change Log:

[Change Log](https://github.com/codingforinnovations/dockerize-django-with-nextjs/commits/main) .
