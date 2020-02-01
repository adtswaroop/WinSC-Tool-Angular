# WinBook App

[![](https://images.microbadger.com/badges/image/kgrimes2/winbook-app.svg)](https://microbadger.com/images/kgrimes2/winbook-app "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/kgrimes2/winbook-app.svg)](https://microbadger.com/images/kgrimes2/winbook-app "Get your own version badge on microbadger.com")

This is the repository for the WinBook 2.0 Frontend webapp.

## Development Environment

Please make sure the following are installed:

- NodeJS v13.6.6 [NodeJS](https://nodejs.org/en/)
- AngularCLI v8.3.6 [Angular CLI](https://github.com/angular/angular-cli)

Additionally, if you would like to build and run the app using Docker, [please install it](https://www.docker.com/get-started).

## Project Setup

Please follow the guide for setting up your angular development environment using Angular-CLI as follows:
[Angular CLI Basic Installation and Basic workflow](https://angular.io/cli)

### MacOS
Install the required dependencies for the project by running the following command in the project root directory:

`npm install`

To run the local development web app, run

`ng serve`

and navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

### Windows
Install angular by using the following command in the root directory:

`npm install -g @angular/cli`

Install the required dependencies for the project by running the following command in the project root directory:

`npm update`

`npm install`

Edit `APP_ROOT/src/proxy.conf.json` set "target" to server address like `localhost:3000`

Edit `SERVER_ROOT/config/config.json` and set the MySQL related variables

To run the local development web app, run

`ng serve --open`

and navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

### WinBook Server

Enter server root directory and use "node index.js" to run the server

## Contribution Conventions

If you are working on the project, create a new branch from ‘develop’ called ‘Name/feature-xyz’ 

Ex. ‘James/HomeScreen_Carousel’

Only once you’ve finished the feature should you create a pull request into ‘develop’. That way we can avoid major merge conflicts and review each others code.

Please do not stray off task on your feature branch, if you see unrelated bugs or code that needs clean up please create a new, separate feature branch for that specific task.

## Code Scaffolding

In order to quickly and cleanly generate the supporting boilerplate for a new file, run

`ng generate component component-name` 

to generate a new component. You can also use 

`ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Building

Run 

`ng build` 

to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Testing

### Running unit tests

Run 

`ng test` 

to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run 

`ng e2e` 

to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Docker

### Building image

Once you have Docker installed, building a Winbook image is as easy as running the following:

```
$ docker build -t kgrimes2/winbook-app:<tag> .
```

where `<tag>` is the version of the `winbook-app` you are building.

If the build completes without error, you should be able to see the image:

```
$ docker images | grep winbook
kgrimes2/winbook-app     0.0.1     5f4158ab778f      10 minutes ago      59MB
```

### Running it

You can run the frontend as follows:

```
$ docker run -p 3000:80 -d --name winbook-app kgrimes2/winbook-app:<tag>
<container id>
```

You should then be able to access the webapp via `http://localhost:3000`.

You can stop the container via `docker stop <container id>`.

### Pushing it

Once you've built an image, you can push it to the hub.docker.com registry. First, log in:

```
$ docker login docker.io
```

And then push the image:

```
$ docker push kgrimes2/winbook-app:<tag>
```
