import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddCursoComponent } from './edit-add-curso.component';

describe('EditAddCursoComponent', () => {
  let component: EditAddCursoComponent;
  let fixture: ComponentFixture<EditAddCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
