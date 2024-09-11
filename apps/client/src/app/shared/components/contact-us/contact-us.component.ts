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

@Component({
  selector: 'bilva-contact-us',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  contactUsform!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.init();
  }

  init() {
    this.contactUsform = this.fb.group({
      fullName: this.fb.control('', { validators: [Validators.required] }),
    });
  }
}
