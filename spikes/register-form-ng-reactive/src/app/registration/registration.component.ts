import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) {
  }

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.profileForm.value);
    //his.router.navigate(['/dasboard']);
    this.router.navigate(['/dashboard', { email: this.profileForm.value.email }]);
  }
}
