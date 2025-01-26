import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-initiliser',
  templateUrl: './initiliser.component.html',
  styleUrl: './initiliser.component.css',
})
export class InitiliserComponent {
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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([
        this.createItem(), // Add an initial item
      ]),
    });
  }

  // Create a new item (object) for the list
  createItem() {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  // Get the items FormArray
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  // Add a new item to the list
  addItem() {
    this.items.push(this.createItem());
  }

  // Remove an item from the list
  removeItem(index: number) {
    this.items.removeAt(index);
  }

  // Submit the form and log the values
  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
