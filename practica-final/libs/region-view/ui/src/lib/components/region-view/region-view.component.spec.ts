import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { RegionViewComponent } from './region-view.component';
import { Input, ViewChild, Component } from '@angular/core';
import { RegionView } from '@pf/api';

@Component({
  selector: 'pf-host',
  template: '<pf-region-view [regions]="regions"></pf-region-view>'
})
class TestHostComponent {
  @Input() regions: RegionView[];
  @ViewChild(RegionViewComponent, { static: false })
  componentRegionListComponent: RegionViewComponent;
}

describe('RegionsListComponent', () => {
  let hostComponent: TestHostComponent;
  let regionViewFixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterModule],
      declarations: [RegionViewComponent, TestHostComponent]
    }).compileComponents();

    regionViewFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = regionViewFixture.componentInstance;
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegionViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Specific code and iso2Code for region', () => {
    fakeAsync(() => {
      hostComponent.regions = [
        {
          id: 'Test',
          iso2Code: 'Test',
          name: '',
          region: {
            id: '',
            iso2code: '',
            value: ''
          },
          adminregion: {
            id: '',
            iso2code: '',
            value: ''
          },
          incomeLevel: {
            id: '',
            iso2code: '',
            value: ''
          },
          lendingType: {
            id: '',
            iso2code: '',
            value: ''
          },
          capitalCity: '',
          longitude: '',
          latitude: '',
        }
      ];
      regionViewFixture.detectChanges();
      expect(regionViewFixture.debugElement.query(By.css('.region-view__code'))
      .nativeElement.textContent.trim())
      .toEqual(`${hostComponent.componentRegionListComponent.regions[0].id} - ${hostComponent.componentRegionListComponent.regions[0].iso2Code}`);
    });
  });
});
