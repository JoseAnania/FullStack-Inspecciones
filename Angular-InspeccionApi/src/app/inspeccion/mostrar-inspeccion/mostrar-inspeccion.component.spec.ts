import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarInspeccionComponent } from './mostrar-inspeccion.component';

describe('MostrarInspeccionComponent', () => {
  let component: MostrarInspeccionComponent;
  let fixture: ComponentFixture<MostrarInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarInspeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
