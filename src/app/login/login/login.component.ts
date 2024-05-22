import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignDivVisiable: boolean = true;
  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();
  signupForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      pseudo: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],

    });
  }

  confirmationValidate = (control: FormGroup): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.signupForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  onRegister() {
    let pseudoError = false;
    let emailError = false;

    // Validation du pseudo
    const pseudoRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    if (!pseudoRegex.test(this.signUpObj.name)) {
      pseudoError = true;
    }

    // Validation de l'email
    const emailRegex = /^[a-zA-Z]+[._]?[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(gmail|yahoo)\.(com|fr|net)$/;
    if (!emailRegex.test(this.signUpObj.email)) {
      emailError = true;
    }

    // Construction du message d'erreur
    let errorMessage = '';
    if (pseudoError && emailError) {
      errorMessage = 'Le pseudo doit commencer par une lettre et ne contenir que des lettres et des chiffres. \nVeuillez également entrer une adresse e-mail valide avec le format nom.prenom@gmail/yahoo.com/fr/net.';
    } else if (pseudoError) {
      errorMessage = 'Le pseudo doit commencer par une lettre et ne contenir que des lettres et des chiffres.';
    } else if (emailError) {
      errorMessage = 'Veuillez entrer une adresse e-mail valide avec le format nom.prenom@gmail/yahoo.com/fr/net.';
    }

    // Affichage de l'erreur si nécessaire
    if (errorMessage !== '') {
      alert(errorMessage);
      return;
    }
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null) {
      const users = JSON.parse(localUsers);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }
    alert('Registration Success');
    console.log(this.signupForm.value);
    // Redirect to login page after registration
    this.router.navigateByUrl('/login');
  }

  onLogin() {
    // Your login logic
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null) {
      const users = JSON.parse(localUsers);
      const isUserPresent = users.find((user: SignUpModel) => user.email == this.loginObj.email && user.password == this.loginObj.password);
      if (isUserPresent != undefined) {
        alert("User Found...");
        // Store logged-in user in localStorage
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        // Redirect to dashboard after login
        this.router.navigateByUrl('/dashboard');
      } else {
        alert("No User Found")
      }
    }
  }
}

export class SignUpModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password = "";
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }
}
