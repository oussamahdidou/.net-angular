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
  options?: string[];
  placeholder: string;
}
@Component({
  selector: 'app-initiliser',
  templateUrl: './initiliser.component.html',
  styleUrl: './initiliser.component.css',
})
export class InitiliserComponent implements OnInit {
  addForm() {
    console.log(this.inputFields);
  }
  inputFields: InputField[] = [];
  needOptions(type: string): boolean {
    return type === 'radio' || type === 'checkbox';
  }
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
    this.inputs.push({
      label: field.label,
      name: field.name,
      control: control,
      type: field.type,
      placeholder: field.placeholder,
      options: field.options,
    });
    this.form.addControl(field.name, control);
  }
  addInputs(inputFields: InputField[]): void {
    inputFields.forEach((field) => {
      const control = this.fb.control(
        field.defaultValue,
        field.required ? Validators.required : null
      );
      this.inputs.push({
        label: field.label,
        name: field.name,
        control: control,
        type: field.type,
        placeholder: field.placeholder,
        options: field.options,
      });
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
