import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../Services/modal.service';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.scss',
})
export class JobApplicationComponent implements OnInit {
  jobForm: FormGroup;
  generalForm: FormGroup;
  employersForm: FormGroup;
  veteransForm: FormGroup;
  @Input() isOpen: boolean = false;


  isDialogOpen = false;
  modalType = ''

  constructor(
    // public dialogRef: MatDialogRef<JobApplicationComponent>,
    private fb: FormBuilder,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogService: ModalService
    
  ) {
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      resume: ['', Validators.required],
      message: [''],
    });

    this.generalForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [''],
      message: [''],
    });

    this.employersForm = this.fb.group({
      company_name: ['', Validators.required],
      contact_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [''],
      message: [''],
    });

    this.veteransForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      military_Branch: [''],
      transition_date: [''],
      message: [''],
    });


    this.dialogService.dialogState$.subscribe((state: { state: boolean, type: string }) => {
      this.isDialogOpen = state.state;
      this.modalType = state.type;
      console.log(' this.modalType', this.modalType)
    });
  }

  closeDialog() {
    this.dialogService.closeDialog();
  }

  ngOnInit(): void {}


  onSubmit(): void {
    if (this.jobForm.valid) {
      // Handle the form submission, like sending the data to a backend
      console.log(this.jobForm.value);
      // this.dialogRef.close();
    }
  }
  closeDialogOnBackdrop(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeDialog();
    }
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
