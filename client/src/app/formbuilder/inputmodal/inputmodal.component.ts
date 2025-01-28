import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { OptionsmodalComponent } from '../optionsmodal/optionsmodal.component';

@Component({
  selector: 'app-inputmodal',
  templateUrl: './inputmodal.component.html',
  styleUrl: './inputmodal.component.css',
})
export class InputmodalComponent {
  form: FormGroup;
  options: string[] = [];
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<InputmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      label: ['', Validators.required],
      type: [data.type || 'hidden'],
      name: ['', Validators.required],
      options: [this.options],
      placeholder: [''],
      defaultValue: [''],
      required: [false],
    });
  }
  needOptions(): boolean {
    return this.data.type === 'radio' || this.data.type === 'checkbox';
  }
  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
  openModal(): void {
    const dialogRef = this.dialog.open(OptionsmodalComponent, {
      width: '500px',
      height: '300px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.options.push(result.option);
      }
    });
  }
}
