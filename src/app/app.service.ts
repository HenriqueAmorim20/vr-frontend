import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getCursos() {
    return this.httpClient.get('/cursos');
  }

  getCursoById(id: number) {
    return this.httpClient.get(`/cursos/${id}`);
  }

  createCurso(curso: any) {
    return this.httpClient.post('/cursos', curso);
  }

  updateCurso(id: number, curso: any) {
    return this.httpClient.put(`/cursos/${id}`, curso);
  }

  deleteCurso(id: number) {
    return this.httpClient.delete(`/cursos/${id}`);
  }

  getAlunos() {
    return this.httpClient.get('/alunos');
  }

  getAlunoById(id: number) {
    return this.httpClient.get(`/alunos/${id}`);
  }

  createAluno(aluno: any) {
    return this.httpClient.post('/alunos', aluno);
  }

  updateAluno(id: number, aluno: any) {
    return this.httpClient.put(`/alunos/${id}`, aluno);
  }

  deleteAluno(id: number) {
    return this.httpClient.delete(`/alunos/${id}`);
  }

  getCursosAlunoById(id: number) {
    return this.httpClient.get(`/alunos/${id}/cursos`);
  }

  getAlunosCursoById(id: number) {
    return this.httpClient.get(`/cursos/${id}/alunos`);
  }

  addCursoAlunoById(idAluno: number, idCurso: number) {
    return this.httpClient.post(`/alunos/${idAluno}/cursos/${idCurso}`, {});
  }

  deleteCursoAlunoById(idAluno: number, idCurso: number) {
    return this.httpClient.delete(`/alunos/${idAluno}/cursos/${idCurso}`);
  }
}
