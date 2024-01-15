import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderTheFoldComponent } from './under-the-fold.component';

describe('UnderTheFoldComponent', () => {
  let component: UnderTheFoldComponent;
  let fixture: ComponentFixture<UnderTheFoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderTheFoldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderTheFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
