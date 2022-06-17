import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IList} from "../../shared/model/weather-app.model";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ErrorDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any  ) { }

  ngOnInit(): void {
  }

}