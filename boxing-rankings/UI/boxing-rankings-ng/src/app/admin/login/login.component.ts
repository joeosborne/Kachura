import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      //this.router.navigate(['/dashboard', { email: this.profileForm.value.email }]);
      this.router.navigate(['/edit-rankings']);

      //alert('todo: nav')
      //this.submitEM.emit(this.form.value);
    }
  }


}
