import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app.component';
import {CoursesComponent} from './components/courses.component'
import {CourseBoxComponent} from "./components/coursebox.component";
import {CartComponent} from "./components/cart.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, CoursesComponent, CourseBoxComponent, CartComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}