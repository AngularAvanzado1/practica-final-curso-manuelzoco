import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RegionViewUiModule } from '@pf/region-view/ui';
import { RegionViewContainerComponent } from './region-view-container.component';

const ActivatedRouteStub = {
  snapshot: {
    data: {}
  }
};

describe('RegionViewContainerComponent', () => {
  let component: RegionViewContainerComponent;
  let fixture: ComponentFixture<RegionViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RegionViewUiModule, RouterTestingModule],
      declarations: [RegionViewContainerComponent],
      providers: [
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
