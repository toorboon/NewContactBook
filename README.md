# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## What modules I need to install for this app if I want to develop it?

You have to install the module for firebase2:
`npm install firebase @angular/fire --save`
You also need to install the module for the Angular Materials used:
`npm install --save @angular/material @angular/cdk @angular/animations` 
for the Angular Materials you also need to import this into your global stylesheet:
`@import "~@angular/material/prebuilt-themes/indigo-pink.css"`

## Put it to production

If you intend to use this app in production you MUST change the firebase connected to the app (do this by changing the firebaseConfig in the environment.ts file --> you get new credentials if you generate a new firebase here https://firebase.google.com/). At the moment the connected firebase is already compromised because the api-key is publicly available here on GitHub.
