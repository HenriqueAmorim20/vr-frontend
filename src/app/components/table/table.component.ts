import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';
import { AppService } from 'src/app/app.service';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { EditAddAlunoComponent } from '../dialogs/edit-add-aluno/edit-add-aluno.component';
import { EditAddCursoComponent } from '../dialogs/edit-add-curso/edit-add-curso.component';
import { InfoAlunoComponent } from '../dialogs/info-aluno/info-aluno.component';
import { InfoCursoComponent } from '../dialogs/info-curso/info-curso.component';

interface Column {
  def: string;
  label: string;
}

interface Data {
  id: number;
  nome?: string;
  descricao?: string;
  ementa?: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Output() refreshTable = new EventEmitter<string>();
  @Input() name: string = 'default';
  @Input() columns: Column[] = [];
  @Input() dataSource: Data[] = [];
  displayedColumns: string[] = [];
  constructor(
    private dialog: MatDialog,
    private _appService: AppService,
    private _notificationService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(column => column.def);
  }

  openDialogInfo(id: number) {
    if (this.name === 'curso') this.getAlunosCursoById(id);
    else if (this.name === 'aluno') this.getCursosAlunoById(id);
  }

  getCursosAlunoById(idAluno: number) {
    this._appService.getCursosAlunoById(idAluno).subscribe((response: any) => {
      if (response) this.openDialogInfoAluno(response);
    });
  }

  openDialogInfoAluno(aluno: any) {
    this.dialog.open(InfoAlunoComponent, {
      data: aluno,
    });
  }

  getAlunosCursoById(idCurso: number) {
    this._appService.getAlunosCursoById(idCurso).subscribe((response: any) => {
      if (response) this.openDialogInfoCurso(response);
    });
  }

  openDialogInfoCurso(curso: any) {
    this.dialog.open(InfoCursoComponent, {
      data: curso,
    });
  }

  openDeleteDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { id: id, title: this.name },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.name === 'curso') this.deleteCurso(id);
        else if (this.name === 'aluno') this.deleteAluno(id);
      }
    });
  }

  deleteCurso(id: number) {
    try {
      this._appService.deleteCurso(id).subscribe((response: any) => {
        this.refreshTable.emit();
        this._notificationService.success('Sucesso!', 'Curso Deletado.', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        });
      });
    } catch (error) {
      this._notificationService.error(
        'Sucesso!',
        'Não foi possível deletar curso.',
        {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        }
      );
    }
  }

  deleteAluno(id: number) {
    try {
      this._appService.deleteAluno(id).subscribe((response: any) => {
        this.refreshTable.emit();
        this._notificationService.success('Sucesso!', 'Aluno deletado.', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        });
      });
    } catch (error) {
      this._notificationService.error(
        'Sucesso!',
        'Não foi possível deletar aluno.',
        {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        }
      );
    }
  }

  openEditDialog(element: Object) {
    if (this.name === 'curso') this.openEditDialogCurso(element);
    else if (this.name === 'aluno') this.openEditDialogAluno(element);
  }

  openEditDialogCurso(element: Object) {
    const dialogRef = this.dialog.open(EditAddCursoComponent, {
      data: element,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.id) this.updateCurso(result);
    });
  }

  openEditDialogAluno(element: Object) {
    const dialogRef = this.dialog.open(EditAddAlunoComponent, {
      data: element,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.id) this.updateAluno(result);
    });
  }

  updateCurso(element: any) {
    try {
      this._appService
        .updateCurso(element.id, element)
        .subscribe((response: any) => {
          this.refreshTable.emit();
          this._notificationService.success('Sucesso!', 'Curso atualizado.', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
          });
        });
    } catch (error) {
      this._notificationService.error(
        'Sucesso!',
        'Não foi possível atualizar curso.',
        {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        }
      );
    }
  }

  updateAluno(element: any) {
    try {
      this._appService
        .updateAluno(element.id, element)
        .subscribe((response: any) => {
          this.refreshTable.emit();
          this._notificationService.success('Sucesso!', 'Aluno atualizado.', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
          });
        });
    } catch (error) {
      this._notificationService.error(
        'Sucesso!',
        'Não foi possível atualizar aluno.',
        {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        }
      );
    }
  }
}
