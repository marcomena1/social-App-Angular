import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signup: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',  // Changed from 'username' to 'userName' to match the signupObj
    email: '',
    password: ''
  };

  constructor(private router: Router) { }


  ngOnInit(): void {
    // Load existing users from localStorage
    const localSignup = localStorage.getItem('signup');
    if (localSignup) {
      this.signup = JSON.parse(localSignup);
    }
  }

  onSignup(): void {
    // Push the signupObj into the signup array and save to localStorage
    this.signup.push({ ...this.signupObj });
    localStorage.setItem('signup', JSON.stringify(this.signup));

    // Reset the signupObj after signup
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };

    alert('User signed up successfully!');
  }

  onLogin(): void {
    // Check if the user exists
    const isUserExist = this.signup.find(m => m.userName === this.loginObj.userName && m.password === this.loginObj.password);

    if (isUserExist !== undefined) {
      alert('User login successful!');
      this.router.navigate(['/mainPage'])
    } else {
      alert('Wrong credentials');
    }

    // Optionally, you can reset loginObj after login attempt
    this.loginObj = {
      userName: '',
      email: '',
      password: ''
    };


  }
}
