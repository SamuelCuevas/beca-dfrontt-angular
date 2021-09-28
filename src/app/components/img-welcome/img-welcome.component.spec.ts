import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgWelcomeComponent } from './img-welcome.component';

describe('ImgWelcomeComponent', () => {
  let component: ImgWelcomeComponent;
  let fixture: ComponentFixture<ImgWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
