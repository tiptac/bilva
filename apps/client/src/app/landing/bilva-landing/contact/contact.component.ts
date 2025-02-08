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
import { Observable, shareReplay, switchMap } from 'rxjs';

const requestCallBackUrl = 'api/request-call-back';

interface RequestCallBackDetails {
  url: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
}
@Component({
  selector: 'bilva-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactUsform!: FormGroup;

  requestCallBackDetails$: Observable<RequestCallBackDetails>;
  success = false;
  error = false;
  inProgress = false;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.init();
    this.requestCallBackDetails$ = this.http
      .get<RequestCallBackDetails>(requestCallBackUrl)
      .pipe(shareReplay(1));
  }

  requestCallBack() {
    this.inProgress = true;
    this.success = this.error = false;
    this.requestCallBackDetails$
      .pipe(
        switchMap((requestCallBackDetails) => {
          const formData = new FormData();
          formData.append(
            requestCallBackDetails.email,
            this.contactUsform.value.email
          );
          formData.append(
            requestCallBackDetails.fullName,
            this.contactUsform.value.fullName
          );
          formData.append(
            requestCallBackDetails.message,
            this.contactUsform.value.message
          );
          formData.append(
            requestCallBackDetails.phone,
            this.contactUsform.value.phone
          );
          return this.http.post('api/request-call-back', formData, {
            responseType: 'text',
          });
        })
      )
      .subscribe({
        next: () => {
          this.success = true;
          this.error = this.inProgress = false;
          this.contactUsform.disable();
        },
        error: (err) => {
          console.error(err);
          this.error = true;
          this.success = this.inProgress = false;
        },
      });
  }

  private init() {
    this.contactUsform = this.fb.group({
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
      message: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(5)],
      }),
    });
  }
}
