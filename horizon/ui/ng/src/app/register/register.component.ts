import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'horizon-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

// todo: finish Register form and post to API layer
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: NonNullableFormBuilder) {
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
