# loop
Weight Tracker App - Allows users to register an account and record their weight. Users can log back in and receive a visual representation of their weight history.

## Installation

You can make use of docker compose to easily get the project running on your computer

A link to the containers can be found [here](https://hub.docker.com/r/masoodgool/loop)

You can run the docker volume using 

```bash
docker-compose up
```

Use Node 16.13.2.

There is a client side and server side to the application

To run the client navigate in to the directory and run 

```bash
npm start
```

The client will run on port 3000

To run the server navigate in to the directory and run 

```bash
npm run dev
```

The server will run on port 8000