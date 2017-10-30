//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { SearchCustomerComponent } from './SearchCustomerComponent';
System.register(["@angular/core", "@angular/platform-browser", "@angular/router", "@angular/forms", "@angular/common", "./app.component", "./home/home.component", "./forms/createCustomer.Component", "./forms/searchCustomer.Component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, router_1, forms_1, common_1, app_component_1, home_component_1, createCustomer_Component_1, searchCustomer_Component_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (createCustomer_Component_1_1) {
                createCustomer_Component_1 = createCustomer_Component_1_1;
            },
            function (searchCustomer_Component_1_1) {
                searchCustomer_Component_1 = searchCustomer_Component_1_1;
            }
        ],
        execute: function () {//import { NgModule } from '@angular/core';
            //import { BrowserModule } from '@angular/platform-browser';
            //import { SearchCustomerComponent } from './SearchCustomerComponent';
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.ReactiveFormsModule,
                        //RouterModule.forRoot(appRoutes),
                        router_1.RouterModule.forRoot([
                            { path: 'CreateCustomer', component: createCustomer_Component_1.createCustomerComponent },
                            { path: 'SearchCustomer', component: searchCustomer_Component_1.searchCustomerComponent },
                        ]),
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        home_component_1.HomeComponent,
                        createCustomer_Component_1.createCustomerComponent,
                        searchCustomer_Component_1.searchCustomerComponent
                    ],
                    providers: [
                        { provide: common_1.APP_BASE_HREF, useValue: location.pathname },
                    ],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map