import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-add-curso',
  templateUrl: './edit-add-curso.component.html',
  styleUrls: ['./edit-add-curso.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAddCursoComponent {
  curso: any = {
    id: null,
    descricacao: '',
    ementa: '',
  };

  constructor(
    public dialogRef: MatDialogRef<EditAddCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) this.curso = Object.assign({}, data);
  }
}
