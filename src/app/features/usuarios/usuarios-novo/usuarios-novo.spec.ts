import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosNovo } from './usuarios-novo';

describe('UsuariosNovo', () => {
  let component: UsuariosNovo;
  let fixture: ComponentFixture<UsuariosNovo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosNovo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosNovo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
