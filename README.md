
# AngularMaterialApp

## Udemy course

https://www.udemy.com/course/angular-full-app-with-angular-material-angularfire-ngrx/

## Angular material component references

https://material.angular.io/

## How to add angular material to your angular app

- Go to https://material.angular.io/
- Go to Guides > Getting started

**Note:** You don't install angular material package gobally on your machine. It's a per project dependency.

## How to create Auth guard with scaffolding?

 - ng g g /components/auth/auth   where, /components/auth is directory and last auth is the guard name.

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
- Add `skipLibCheck: true` in `tsconfig.json > compilerOptions`.  
  This avoids following error, while using EventEmitter from @angular/core
    ```
        error S2300: Duplicate identifier 'IteratorResult'
    ```
- `<mat-card>` uses `.mdc-card` internally. You can control mat-card's css only with `.mdc-card` class.
- setTimeout() method is different from setInterval() method. setTimeout() executes only once, setInteval() executes in a loop.

IMPORTANT: Install rxjs-compat
As explained in the last video, you could theoretically NOT use rxjs-compat  and update all your RxJS-related code (imports + operator usage) as explained.

BUT Angularfire wasn't updated to support RxJS 6 yet. And since we'll use Angularfire in this course, you will need rxjs-compat  installed for the time being

```
npm install --save rxjs-compat 
```
    
## Useful Resources & Links
 - Angular Material Setup Docs: https://material.angular.io/guide/getting-started
 - Angular Material Component Docs: https://material.angular.io/components/categories
 - Angular Material Github Repo: https://github.com/angular/material2
 - @angular/flex-layout Docs: https://github.com/angular/flex-layout
 - Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 - Flexbox Video: https://academind.com/learn/css/understanding-css/flexbox-basics-container
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
