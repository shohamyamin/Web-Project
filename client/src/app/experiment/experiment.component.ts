import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SelectTextsDialogComponent } from './select-texts-dialog/select-texts-dialog.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class ExperimentComponent implements OnInit {
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {}
  trainFormGroup: FormGroup;
  testFormGroup: FormGroup;
  trainLoaded: boolean;
  testLoaded: boolean;
  ngOnInit(): void {
    this.trainFormGroup = this.formBuilder.group({
      trainClasses: ['', Validators.required],
    });
    this.testFormGroup = this.formBuilder.group({
      testClasses: ['', Validators.required],
    });
    this.trainLoaded = false;
    this.testLoaded = false;
  }
  openSelectTextsDialog(trainOrTrain: string) {
    const dialogRef = this.dialog.open(SelectTextsDialogComponent, {
      minWidth: '400px',
      minHeight: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
