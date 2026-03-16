import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroList } from './cadastro-list';

describe('CadastroList', () => {
  let component: CadastroList;
  let fixture: ComponentFixture<CadastroList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroList],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
