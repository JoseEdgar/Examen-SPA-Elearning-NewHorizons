import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursocategoriacontainerComponent } from './cursocategoriacontainer.component';

describe('CursocategoriacontainerComponent', () => {
  let component: CursocategoriacontainerComponent;
  let fixture: ComponentFixture<CursocategoriacontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursocategoriacontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursocategoriacontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
