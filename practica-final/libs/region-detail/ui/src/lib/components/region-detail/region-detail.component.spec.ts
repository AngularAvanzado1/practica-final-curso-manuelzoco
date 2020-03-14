import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDetailComponent } from './region-detail.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegionDetailComponent', () => {
  let component: RegionDetailComponent;
  let fixture: ComponentFixture<RegionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule],
      declarations: [RegionDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
