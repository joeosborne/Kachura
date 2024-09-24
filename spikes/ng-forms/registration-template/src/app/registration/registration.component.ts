import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  // Define the model to hold form data
  model = {
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    email: '',
    password: '',
  };

  // Handle form submission
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted:', this.model);
    } else {
      console.log('Form is invalid');
    }
  }
}
