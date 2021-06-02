# Docker + Node + Express Template

_Followed + adapted from [this article](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)_

## Setup

Install Node on your local machine if you haven't already.
Clone this GitHub repo. (The directory that you clone it to will be your project directory)

## Build Process

Run the following in the project directory:
`docker build . -t username-here/container-name-here`

- `username-here`: Replace with your name
- `container-name-here`: Replace with what you would like to title the container

## Run

Run the following in the project directory:
`docker run -p machine-port:8080 -d username-here/container-name-here`

- `machine-port`: The port you want the Docker port mapped to, on your local machine
- `username-here`: Defined above
- `container-name-here`: Defined above

## Usage

Get container ID (and port information): `$ docker ps`

List current docker images: `$ docker images`

Print app output: `$ docker logs <container id>`

Example of output: `Running on http://localhost:8080`

Enter Container: `$ docker exec -it <container id> /bin/bash`

Test app by running `$ curl -i localhost:port-here` on your local machine. Replace `port-here` with your local port you mapped the Docker port to earlier. It should return "hello world" along with request information assuming you kept the `server.js` template file.
