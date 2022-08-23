import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';

import {FormGroup, FormControl, UntypedFormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.css']
})
export class TypedFormComponent implements OnInit {

  constructor() {
  }

  // NOTE: surname is an UntypedFormControl which translates to "any"
  sampleForm = new FormGroup({
    email: new FormControl<string|null>(null),
    surname: new UntypedFormControl(null),
    age: new FormControl<number>(0),
  });

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('sampleForm.value...')
    console.log(this.sampleForm.value);
    // NOTE: In previous versions, the following would have been OK at
    // build time but cause a run time error
    //console.log('email: ' + this.sampleForm.value.emavil);
    console.log('email: ' + this.sampleForm.value.email);
    console.log('age: ' + this.sampleForm.value.age);
    console.log('surname: ' + this.sampleForm.value.surname);
  }
}
