//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { SearchCustomerComponent } from './SearchCustomerComponent';

//@NgModule({
//    imports: [BrowserModule],
//    declarations: [SearchCustomerComponent],
//    bootstrap: [SearchCustomerComponent]
//})
//export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { createCustomerComponent } from './forms/createCustomer.Component';
import { searchCustomerComponent } from './forms/searchCustomer.Component';
//const appRoutes: Routes = [
//    { path: 'forms', component: createCustomerComponent },
//    { path: '', component: HomeComponent },
//];

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        //RouterModule.forRoot(appRoutes),
        RouterModule.forRoot([
            { path: 'CreateCustomer', component: createCustomerComponent },
            { path: 'SearchCustomer', component: searchCustomerComponent},
            //{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ]),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        createCustomerComponent,
        searchCustomerComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: location.pathname }, // This is specifically for Plunker's baseURL: run.plunkr.co
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

