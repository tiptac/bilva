import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  IonButton,
  IonInput,
  IonItem,
  IonList,
  IonText,
} from '@ionic/angular/standalone';
import { SessionService } from '../../../../services/session.service';
import { switchMap } from 'rxjs';

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
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  profileForm!: FormGroup;

  success = false;
  error = false;
  inProgress = false;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private sessionService: SessionService
  ) {
    this.init();
  }

  save() {
    this.inProgress = true;
    this.success = this.error = false;
    const updateValue: {
      email?: string;
      phone?: string;
      fullName?: string;
      password?: string;
    } = {
      email: this.profileForm.value.email,
      phone: this.profileForm.value.phone,
      fullName: this.profileForm.value.fullName,
    };
    if (this.profileForm.value.password) {
      updateValue.password = this.profileForm.value.password;
    }

    this.http.patch('api/account', updateValue).subscribe({
      next: (v) => {
        console.log(v);
        this.success = true;
        this.error = this.inProgress = false;
      },
      error: (err) => {
        console.error(err);
        this.error = true;
        this.inProgress = this.success = false;
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
    const user = this.sessionService.user() as {
      fullName: string;
      email: string;
      phone: string;
    };
    this.profileForm = this.fb.group(
      {
        fullName: this.fb.control(user.fullName, {
          validators: [
            Validators.minLength(2),
            Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
          ],
        }),
        phone: this.fb.control(user.phone, {
          validators: [
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern('[0-9]+'),
          ],
        }),
        email: this.fb.control(user.email, {
          validators: [Validators.email],
        }),
        password: this.fb.control('', {}),
        confirmPassword: this.fb.control('', {}),
      },
      { validators: [matchPassword] }
    );
  }
}
