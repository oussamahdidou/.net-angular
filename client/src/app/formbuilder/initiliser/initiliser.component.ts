import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InputmodalComponent } from '../inputmodal/inputmodal.component';
import { InputField } from '../../types/types';
interface InputValidator {
  label: string;
  name: string;
  type: string;
  control: any;
  placeholder: string;
}
@Component({
  selector: 'app-initiliser',
  templateUrl: './initiliser.component.html',
  styleUrl: './initiliser.component.css',
})
export class InitiliserComponent implements OnInit {
  inputFields: InputField[] = [
    {
      label: 'First Name',
      type: 'text',
      name: 'firstName',
      placeholder: 'Enter your first name',
      defaultValue: '',
      required: true,
    },
    {
      label: 'Last Name',
      type: 'text',
      name: 'lastName',
      placeholder: 'Enter your last name',
      defaultValue: '',
      required: true,
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      placeholder: 'Enter your email address',
      defaultValue: '',
      required: true,
    },
    {
      label: 'Phone Number',
      type: 'tel',
      name: 'phoneNumber',
      placeholder: 'Enter your phone number',
      defaultValue: '',
      required: false,
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      placeholder: 'Enter your password',
      defaultValue: '',
      required: true,
    },
  ];

  inputTypes: string[] = [
    'text',
    'password',
    'email',
    'number',
    'tel',
    'url',
    'search',
    'date',
    'datetime-local',
    'checkbox',
    'radio',
    'file',
  ];

  form: FormGroup;
  inputs: InputValidator[] = [];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.form = this.fb.group({});
  }
  ngOnInit(): void {
    this.addInputs(this.inputFields);
  }
  addInputField(field: InputField): void {
    const control = this.fb.control(
      field.defaultValue,
      field.required ? Validators.required : null
    );

    // Push the new input field to the inputs array
    this.inputs.push({
      label: field.label,
      name: field.name,
      control: control,
      type: field.type,
      placeholder: field.placeholder,
    });

    // Add the form control to the form
    this.form.addControl(field.name, control);
  }
  addInputs(inputFields: InputField[]): void {
    inputFields.forEach((field) => {
      // Create a form control with validation based on the required field
      const control = this.fb.control(
        field.defaultValue,
        field.required ? Validators.required : null
      );

      // Push the input details (label, name, control) to the inputs array
      this.inputs.push({
        label: field.label,
        name: field.name,
        control: control,
        type: field.type,
        placeholder: field.placeholder,
      });

      // Add each form control to the form by the field's name
      this.form.addControl(field.name, control);
    });
  }
  openModal(type: string): void {
    const dialogRef = this.dialog.open(InputmodalComponent, {
      width: '500px',
      data: {
        type: type,
      },
    });

    dialogRef.afterClosed().subscribe((result: InputField) => {
      if (result) {
        this.addInputField(result);
        console.log(result);
      }
    });
  }
}
