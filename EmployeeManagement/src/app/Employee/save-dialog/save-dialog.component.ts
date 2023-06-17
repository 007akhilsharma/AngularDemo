import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss']
})
export class SaveDialogComponent {
constructor(

  private dialogref: MatDialogRef<SaveDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClick(): void {
    this.dialogref.close();
  }
}
