import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagigationBarComponent } from './nagigation-bar.component';

describe('NagigationBarComponent', () => {
  let component: NagigationBarComponent;
  let fixture: ComponentFixture<NagigationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NagigationBarComponent]
    });
    fixture = TestBed.createComponent(NagigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
