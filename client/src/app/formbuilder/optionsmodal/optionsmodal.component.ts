import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-optionsmodal',
  templateUrl: './optionsmodal.component.html',
  styleUrl: './optionsmodal.component.css',
})
export class OptionsmodalComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OptionsmodalComponent>
  ) {
    this.form = this.fb.group({
      option: ['', Validators.required],
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
