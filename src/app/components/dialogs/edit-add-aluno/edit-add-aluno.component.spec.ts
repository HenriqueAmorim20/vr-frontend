import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddAlunoComponent } from './edit-add-aluno.component';

describe('EditAddAlunoComponent', () => {
  let component: EditAddAlunoComponent;
  let fixture: ComponentFixture<EditAddAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
