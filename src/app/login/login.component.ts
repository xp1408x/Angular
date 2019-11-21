import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @Input() headline: String = "Hola"
  @Output() onLogging = new EventEmitter()
  visible: Boolean = false
  private loginForm: FormGroup;
  info = {}

  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  createFormGroup(){
    return new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
      password: new FormControl('',Validators.required)
    });
  }
  instance

  constructor(service: UserService, private router: Router){
    this.instance = service
  }

  ngOnInit() {
    this.loginForm = this.createFormGroup();
  }

  get email(){ return this.loginForm.get('email');}
  get password(){ return this.loginForm.get('password');}
	logIn() {
    
    //this.onLogging.emit()
    if (this.email.valid && this.email.value == "pcortez1408@gmail.com" && this.password.valid && this.password.value == "hola") {
      this.instance.password = this.password.value
      this.instance.email = this.email.value
      this.instance.login()
      //this.visible =true 
      this.router.navigate(["/home"])
      
      /* this.info = {email: this.email, password: this.password} */
    }else{
      this.email.setErrors({'incorrect': true});
      console.log("fallaste")
    }
    
  }

	valorIngresado(evt) {
		console.log(evt.target.value)
	}

}
