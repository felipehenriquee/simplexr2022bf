import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialXrComponent } from './tutorial-xr.component';

describe('TutorialXrComponent', () => {
  let component: TutorialXrComponent;
  let fixture: ComponentFixture<TutorialXrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialXrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialXrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
