import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactUsComponent } from '../shared/components/contact-us/contact-us.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bilva-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('contactUs') contactUs!: ElementRef;

  contactUsform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
    });
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

  scroll(el: ElementRef) {
    (el.nativeElement as HTMLDivElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrollToContactUs() {
    this.scroll(this.contactUs);
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
