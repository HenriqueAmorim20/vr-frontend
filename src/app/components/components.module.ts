import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { EditAddCursoComponent } from './dialogs/edit-add-curso/edit-add-curso.component';
import { EditAddAlunoComponent } from './dialogs/edit-add-aluno/edit-add-aluno.component';
import { InfoCursoComponent } from './dialogs/info-curso/info-curso.component';
import { InfoAlunoComponent } from './dialogs/info-aluno/info-aluno.component';

@NgModule({
  declarations: [TableComponent, DeleteDialogComponent, EditAddCursoComponent, EditAddAlunoComponent, InfoCursoComponent, InfoAlunoComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [TableComponent, DeleteDialogComponent, EditAddCursoComponent, EditAddAlunoComponent, InfoCursoComponent, InfoAlunoComponent],
})
export class ComponentsModule {}
