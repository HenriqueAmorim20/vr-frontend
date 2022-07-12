import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-add-aluno',
  templateUrl: './edit-add-aluno.component.html',
  styleUrls: ['./edit-add-aluno.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAddAlunoComponent {
  aluno: any = {
    id: null,
    nome: '',
  };

  constructor(
    public dialogRef: MatDialogRef<EditAddAlunoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) this.aluno = Object.assign({}, data);
  }
}
