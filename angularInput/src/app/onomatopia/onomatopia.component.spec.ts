import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopiaComponent } from './onomatopia.component';

describe('OnomatopiaComponent', () => {
  let component: OnomatopiaComponent;
  let fixture: ComponentFixture<OnomatopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnomatopiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
