import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletedialogbox',
  templateUrl: './deletedialogbox.component.html',
  styleUrls: ['./deletedialogbox.component.css']
})
export class DeletedialogboxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletedialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
     ) { }

  ngOnInit(): void {
  }

}
