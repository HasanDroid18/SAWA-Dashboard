import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { SliderModule } from 'primeng/slider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router } from '@angular/router';

@Component({
  selector: 'add-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule,
    SliderModule,
    InputSwitchModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FloatLabelModule,
  ],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  userForm: FormGroup;
  userTypes: any[];
  userLeadTypes: any[];
  userStatus: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      userType: [null, Validators.required],
      userLeadType: [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      uploadImage: [null],
      passwordExpiry: [60],
      userStatus: [true],
    });

    this.userTypes = [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' },
    ];

    this.userLeadTypes = [
      { label: 'Lead 1', value: 'lead1' },
      { label: 'Lead 2', value: 'lead2' },
    ];
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('User Form Data:', this.userForm.value);
    }
  }

  onStatusChange() {
    this.userStatus = this.userForm.get('userStatus')?.value;
  }

  onBackClick() {
    this.router.navigate(['/search-user']);
  }
}
