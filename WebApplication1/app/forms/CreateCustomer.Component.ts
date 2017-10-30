import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/Forms';
@Component({
    selector: 'create-customer-info',
    templateUrl: './app/CreateCustomerComponentForm.html',
    //styleUrls: ['app/mSearchCustomer.css']
})
export class createCustomerComponent {
    uohForm: FormGroup;
    constructor(public fb: FormBuilder) {
        this.uohForm = fb.group({
            entityName: ['', Validators.required],
            EIN: ['', Validators.required],
            ClassificationCode: ['', Validators.required],
            formationZIPCode: ['', Validators.required],
            bussinessZIPCode: ['', Validators.required],
            bussinessCountryCode: ['',Validators.required]
        }

        )
    }

    save(value: Object): void {
        console.log(value);
    }
}