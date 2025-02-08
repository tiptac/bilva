import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonInput,
  IonItem,
  IonList,
  IonText,
} from '@ionic/angular/standalone';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { appRoutes } from '../../../../app.routes';

@Component({
  selector: 'bilva-signup',
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
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm!: FormGroup;

  success = false;
  error = false;
  inProgress = false;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.init();
  }

  signup() {
    this.inProgress = true;
    this.success = this.error = false;
    this.http.post('api/account', this.signupForm.value).subscribe({
      next: () => {
        this.success = true;
        this.inProgress = false;
        setTimeout(() => {
          this.router.navigate(appRoutes.bilva.user.login);
        }, 1000);
      },
      error: (err) => {
        console.error(err);
        this.error = true;
        this.inProgress = false;
      },
    });
  }

  private init() {
    const matchPassword: ValidatorFn = (control: AbstractControl) => {
      if (
        control.get('password')?.value !== control.get('confirmPassword')?.value
      ) {
        return { passwordMismatch: true };
      }
      return null;
    };
    this.signupForm = this.fb.group(
      {
        fullName: this.fb.control('', {
          validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
          ],
        }),
        phone: this.fb.control('', {
          validators: [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern('[0-9]+'),
          ],
        }),
        email: this.fb.control('', {
          validators: [Validators.required, Validators.email],
        }),
        password: this.fb.control('', {
          validators: [Validators.required],
        }),
        confirmPassword: this.fb.control('', {
          validators: [Validators.required],
        }),
      },
      { validators: [matchPassword] }
    );
  }
}
