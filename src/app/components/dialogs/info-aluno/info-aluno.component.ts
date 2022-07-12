import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';
import { AppService } from 'src/app/app.service';

@Component({
  templateUrl: './info-aluno.component.html',
  styleUrls: ['./info-aluno.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoAlunoComponent implements OnInit {
  idAluno: number = 0;
  aluno: any;
  cursos: any[] = [];
  constructor(
    private cdr: ChangeDetectorRef,
    private _notificationService: NotificationsService,
    private _appService: AppService,
    public dialogRef: MatDialogRef<InfoAlunoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) this.aluno = data;
  }

  ngOnInit() {
    this.getCursos();
  }

  getCursos() {
    this._appService.getCursos().subscribe((response: any) => {
      if (response) {
        this.cursos = response;
        this.cdr.detectChanges();
      }
    });
  }

  addCurso(curso: any) {
    this._appService
      .addCursoAlunoById(this.aluno.id, curso.id)
      .subscribe(() => {
        this.aluno.cursos.push(curso);
        this.cdr.detectChanges();
        this._notificationService.success('Sucesso!', 'Curso adicionado.', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        });
      });
  }

  deleteCurso(idCurso: number) {
    this._appService
      .deleteCursoAlunoById(this.aluno.id, idCurso)
      .subscribe(() => {
        this.aluno.cursos = this.aluno.cursos.filter(
          (curso: any) => curso.id !== idCurso
        );
        this.cdr.detectChanges();
        this._notificationService.success('Sucesso!', 'Curso deletado.', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        });
      });
  }
}
