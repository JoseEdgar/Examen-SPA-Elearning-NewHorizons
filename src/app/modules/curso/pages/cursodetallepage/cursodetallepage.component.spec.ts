import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursodetallepageComponent } from './cursodetallepage.component';

describe('CursodetallepageComponent', () => {
  let component: CursodetallepageComponent;
  let fixture: ComponentFixture<CursodetallepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursodetallepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursodetallepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
