# WinBook App

This is the repository for the WinBook 2.0 Frontend Web App

## Development Environment

Please make sure the following are installed:

- NodeJS v13.6.6 [NodeJS](https://nodejs.org/en/)
- AngularCLI v8.3.6 [Angular CLI](https://github.com/angular/angular-cli)

## Project Setup

Please follow the guide for setting up your angular development environment using Angular-CLI as follows:
[Angular CLI Basic Installation and Basic workflow](https://angular.io/cli)

#### MacOS
Install the required dependencies for the project by running the following command in the project root directory:

`npm install`

To run the local development web app, run

`ng serve`

and navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

#### Windows
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

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Testing

### Running unit tests

Run 

`ng test` 

to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run 

`ng e2e` 

to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Miscellaneous