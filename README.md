
# AngularMaterialApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Udemy course

https://www.udemy.com/course/angular-full-app-with-angular-material-angularfire-ngrx/

## Angular material component references

https://material.angular.io/

## How to add angular material to your angular app

- Go to https://material.angular.io/
- Go to Guides > Getting started

**Note:** You don't install angular material package gobally on your machine. It's a per project dependency.

## Technologies used

 - Controlling layout with @angular/flex-layout package

## Things you often miss

 - You need to both import and export any `material module` in `material.module.ts`
 - All three following are required for datePickModule **(udemy course didn't mention to import BrowserAnimationsModule)**
    ```
        import {MatDatepickerModule} from '@angular/material/datepicker';
        import {MatNativeDateModule, MatRippleModule } from '@angular/material/core';
        import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    ```

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
