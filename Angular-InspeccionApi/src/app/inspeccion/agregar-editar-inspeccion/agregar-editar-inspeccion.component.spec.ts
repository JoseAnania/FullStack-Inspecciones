import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarInspeccionComponent } from './agregar-editar-inspeccion.component';

describe('AgregarEditarInspeccionComponent', () => {
  let component: AgregarEditarInspeccionComponent;
  let fixture: ComponentFixture<AgregarEditarInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarInspeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
