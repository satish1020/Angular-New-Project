System.register(["@angular/core", "@angular/Forms"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Forms_1, createCustomerComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Forms_1_1) {
                Forms_1 = Forms_1_1;
            }
        ],
        execute: function () {
            createCustomerComponent = (function () {
                function createCustomerComponent(fb) {
                    this.fb = fb;
                    this.uohForm = fb.group({
                        entityName: ['', Forms_1.Validators.required],
                        EIN: ['', Forms_1.Validators.required],
                        ClassificationCode: ['', Forms_1.Validators.required],
                        formationZIPCode: ['', Forms_1.Validators.required],
                        bussinessZIPCode: ['', Forms_1.Validators.required],
                        bussinessCountryCode: ['', Forms_1.Validators.required]
                    });
                }
                createCustomerComponent.prototype.save = function (value) {
                    console.log(value);
                };
                return createCustomerComponent;
            }());
            createCustomerComponent = __decorate([
                core_1.Component({
                    selector: 'create-customer-info',
                    templateUrl: './app/CreateCustomerComponentForm.html',
                }),
                __metadata("design:paramtypes", [Forms_1.FormBuilder])
            ], createCustomerComponent);
            exports_1("createCustomerComponent", createCustomerComponent);
        }
    };
});
//# sourceMappingURL=createCustomer.Component.js.map