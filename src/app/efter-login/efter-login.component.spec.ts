import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfterLoginComponent } from './efter-login.component';

describe('EfterLoginComponent', () => {
  let component: EfterLoginComponent;
  let fixture: ComponentFixture<EfterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfterLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
