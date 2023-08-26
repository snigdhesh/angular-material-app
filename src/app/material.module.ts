import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle"
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
//All three following are required for datePickModule (udemy course didn't mention to import BrowserAnimationsModule)
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//To workwith checkboxes in a form, you need following
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports:[
        MatSlideToggleModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        MatCheckboxModule
    ],
    exports: [
        MatSlideToggleModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        MatCheckboxModule  
    ]
})
export class MaterialModule{}