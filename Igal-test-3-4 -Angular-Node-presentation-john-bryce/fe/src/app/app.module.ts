import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { LogoComponent } from './components/layout-area/logo/logo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './components/layout-area/page404/page404.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MainComponent } from './components/main-area/main/main.component';
import { AddOperationComponent } from './components/main-area/add-operation/add-operation.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        LogoComponent,
        Page404Component,
        MainComponent,
        AddOperationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],

    // Tell Angular to create a DI object from ArrayService for the entire app: 
    // providers: [ArrayService],

    // Register the interceptor so any request will invoke it: 
    providers: [],

    bootstrap: [LayoutComponent]
})
export class AppModule { }
