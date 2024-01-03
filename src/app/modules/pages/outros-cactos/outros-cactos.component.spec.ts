import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosCactosComponent } from './outros-cactos.component';

describe('OutrosCactosComponent', () => {
  let component: OutrosCactosComponent;
  let fixture: ComponentFixture<OutrosCactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutrosCactosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutrosCactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
