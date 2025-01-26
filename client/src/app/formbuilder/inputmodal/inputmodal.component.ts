import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-inputmodal',
  templateUrl: './inputmodal.component.html',
  styleUrl: './inputmodal.component.css',
})
export class InputmodalComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InputmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      label: ['', Validators.required],
      type: [data.type || 'hidden'],
      name: ['', Validators.required],
      placeholder: ['', Validators.required],
      defaultValue: [''],
      required: [false],
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
