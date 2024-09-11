import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactUsComponent } from '../shared/components/contact-us/contact-us.component';

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
  contactUsform!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.init();
  }

  init() {
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
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
