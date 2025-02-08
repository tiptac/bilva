import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonInput,
  IonItem,
  IonList,
  IonText,
} from '@ionic/angular/standalone';
import { appRoutes } from '../../../../app.routes';
import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'bilva-login',
  standalone: true,
  imports: [
    CommonModule,
    IonList,
    IonItem,
    IonInput,
    IonText,
    IonButton,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;

  success = false;
  error = false;
  inProgress = false;
  constructor(
    private sessionService: SessionService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.init();
  }

  login() {
    this.sessionService.create(this.loginForm.value).subscribe({
      next: () => {
        this.success = true;
        this.error = this.inProgress = false;
        setTimeout(() => {
          this.router.navigate(appRoutes.bilva.home);
        }, 1000);
      },
      error: (err) => {
        console.error(err);
        this.error = true;
        this.success = this.inProgress = false;
      },
    });
  }

  private init() {
    this.loginForm = this.fb.group({
      username: this.fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
      password: this.fb.control('', {
        validators: [Validators.required],
      }),
    });
  }
}
