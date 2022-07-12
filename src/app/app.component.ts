import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';
import { AppService } from './app.service';
import { EditAddAlunoComponent } from './components/dialogs/edit-add-aluno/edit-add-aluno.component';
import { EditAddCursoComponent } from './components/dialogs/edit-add-curso/edit-add-curso.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'vr-frontend';
  cursos = {
    columns: [
      {
        def: 'id',
        label: 'id',
      },
      {
        def: 'descricao',
        label: 'descrição',
      },
      {
        def: 'ementa',
        label: 'ementa',
      },
      {
        def: 'createdAt',
        label: 'criação',
      },
      {
        def: 'updatedAt',
        label: 'atualização',
      },
      {
        def: 'options',
        label: 'opções',
      },
    ],
    data: [],
  };

  alunos = {
    columns: [
      {
        def: 'id',
        label: 'id',
      },
      {
        def: 'nome',
        label: 'nome',
      },
      {
        def: 'createdAt',
        label: 'criação',
      },
      {
        def: 'updatedAt',
        label: 'atualização',
      },
      {
        def: 'options',
        label: 'opções',
      },
    ],
    data: [],
  };

  constructor(
    private _appService: AppService,
    private dialog: MatDialog,
    private _notificationService: NotificationsService
  ) {}

  ngOnInit() {
    this.getCursos();
    this.getAlunos();
  }

  getCursos() {
    this._appService.getCursos().subscribe((response: any) => {
      this.cursos.data = response;
      this.cursos.data.map((curso: any) => {
        curso.createdAt = this.formatDate(curso.createdAt);
        curso.updatedAt = this.formatDate(curso.updatedAt);
      });
    });
  }

  getAlunos() {
    this._appService.getAlunos().subscribe((response: any) => {
      this.alunos.data = response;
      this.alunos.data.map((aluno: any) => {
        aluno.createdAt = this.formatDate(aluno.createdAt);
        aluno.updatedAt = this.formatDate(aluno.updatedAt);
      });
    });
  }

  formatDate(value: string) {
    const date = new Date(value);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  openAddDialogAluno() {
    const dialogRef = this.dialog.open(EditAddAlunoComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.createAluno(result);
    });
  }

  openAddDialogCurso() {
    const dialogRef = this.dialog.open(EditAddCursoComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.createCurso(result);
    });
  }

  createCurso(element: any) {
    this._appService.createCurso(element).subscribe((response: any) => {
      this.getCursos();
      this._notificationService.success('Sucesso!', 'Novo curso criado.', {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
      });
    });
  }

  createAluno(element: any) {
    this._appService.createAluno(element).subscribe((response: any) => {
      this.getAlunos();
      this._notificationService.success('Sucesso!', 'Novo aluno criado.', {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
      });
    });
  }
}
