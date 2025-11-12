import { Component, ElementRef, signal, ViewChild, input, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { Modal } from 'bootstrap'
import type { RegisterObj } from './interfaces/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('loginModal') loginModel!: ElementRef;
  modalInstance!: Modal;
  isLogin = signal(true);

  registerObj: any = {
    "name": "",
    "surname": "",
    "email": "",
    "isGoogleAccount": false,
    "password": "",
    "confirmPassword": ""
  };

  http = inject(HttpClient);

  ngAfterViewInit() {
    this.modalInstance = new Modal(this.loginModel.nativeElement);
  }

  openModel() {
    if (this.loginModel) {
      this.loginModel.nativeElement.style.display = "block";
    }
  }

  closeModel() {
    if (this.loginModel) {
      this.loginModel.nativeElement.style.display = "none";
    }
  }

  toggleAuthForms(event: Event) {
    event.preventDefault();
    this.isLogin.set(!this.isLogin());

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (this.isLogin()) {
      loginForm?.classList.remove('d-none');
      registerForm?.classList.add('d-none');
      document.getElementById('authModalTitle')!.textContent = 'Login';
    } else {
      loginForm?.classList.add('d-none');
      registerForm?.classList.remove('d-none');
      document.getElementById('authModalTitle')!.textContent = 'Register';
    }
  }

  onRegister() {
    this.http.post('http://localhost:8080/api/Client/CreateClient', this.registerObj)
      .subscribe({
        next: (res: any) => {
          console.log('✅ Respuesta del servidor:', res);
          alert('Registration Successful!');
          this.registerObj = {
            "name": "",
            "surname": "",
            "email": "",
            "isGoogleAccount": false,
            "password": "",
            "confirmPassword": ""
          };
        },
        error: (err) => {
          console.error('❌ Error al registrar:', err);
          alert('Registration Failed. Check the console for details.');
        }
      });
  }
}
