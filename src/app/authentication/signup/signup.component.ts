import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _authService: AuthenticationService) { }

  ngOnInit() {

  }

}
