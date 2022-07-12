import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ChangeDetectorRef,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-info-curso',
  templateUrl: './info-curso.component.html',
  styleUrls: ['./info-curso.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCursoComponent implements OnInit {
  idCurso: number = 0;
  curso: any;
  alunos: any[] = [];
  constructor(
    private cdr: ChangeDetectorRef,
    private _notificationService: NotificationsService,
    private _appService: AppService,
    public dialogRef: MatDialogRef<InfoCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) this.curso = data;
  }

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos() {
    this._appService.getAlunos().subscribe((response: any) => {
      if (response) {
        this.alunos = response;
        this.cdr.detectChanges();
      }
    });
  }

  addCurso(aluno: any) {
    this._appService
      .addCursoAlunoById(aluno.id, this.curso.id)
      .subscribe(() => {
        this.curso.alunos.push(aluno);
        this.cdr.detectChanges();
        this._notificationService.success('Sucesso!', 'Aluno adicionado.', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        });
      });
  }

  deleteCurso(idAluno: number) {
    this._appService
      .deleteCursoAlunoById(idAluno, this.curso.id)
      .subscribe(() => {
        this.curso.alunos = this.curso.alunos.filter(
          (aluno: any) => aluno.id !== idAluno
        );
        this.cdr.detectChanges();
        this._notificationService.success('Sucesso!', 'Aluno deletado.', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        });
      });
  }
}
