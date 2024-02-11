import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjpipesComponent } from './ejpipes.component';

describe('EjpipesComponent', () => {
  let component: EjpipesComponent;
  let fixture: ComponentFixture<EjpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjpipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
