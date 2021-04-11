import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {User} from '../model/user.model';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public hide = true;
  public invalidPassword = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private dialogRef: MatDialogRef<LoginComponent>) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(user: User): void {
    const row = {
      Login: user.login,
      Password: user.password
    };
    this.loginService.login(row).subscribe(response => {
      if (response && response.login === 'ok') {
        console.log('zalogowany');
        this.dialogRef.close({id: 1, name: 'Admin'});
      } else {
        this.invalidPassword = true;
        console.error('bledne haslo');
      }
    });
  }
}
