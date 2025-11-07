import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authservice } from '../../services/auth'; // 👈 nombre correcto del servicio
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'] // 👈 corregido: era styleUrl
})
export class Login {
  private router = inject(Router)
  private authService = inject(Authservice); // 👈 inyección correcta

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  funIngresar() {
    this.authService.loginConNest(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res)
        this.router.navigate(['/admin'])
      },
      (error: any) => {
        console.log(error);
      }
    );
    // alert("Ingresando...")
  }
}
