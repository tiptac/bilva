import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'bilva-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactUsform!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.init();
  }

  requestCallBack() {
    this.http
      .post(
        'https://docs.google.com/forms/d/e/1FAIpQLSdUOLjkDv9dIWrCHFiVytnqyfEJ5c3sAEOMMiAxj2hd1aGAPA/formResponse',
        this.contactUsform.value
      )
      .subscribe({
        error: (err) => {
          console.error(err);
        },
      });
  }

  private init() {
    this.contactUsform = this.fb.group({
      fullName: this.fb.control('', { validators: [Validators.required] }),
      phone: this.fb.control('', {
        validators: [Validators.required, Validators.pattern('[0-9]+')],
      }),
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
      message: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(5)],
      }),
    });
  }
}
