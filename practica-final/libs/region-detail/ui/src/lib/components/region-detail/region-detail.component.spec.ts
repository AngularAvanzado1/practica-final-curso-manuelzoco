import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { RegionDetailComponent } from './region-detail.component';
import { Input, ViewChild, Component } from '@angular/core';
import { RegionView } from '@pf/api';

@Component({
  selector: 'pf-host',
  template: '<pf-region-detail [region]="region"></pf-region-detail>'
})
class TestHostComponent {
  @Input() region: RegionView[];
  @ViewChild(RegionDetailComponent, { static: false })
  componentRegionDetailComponent: RegionDetailComponent;
}

describe('RegionsListComponent', () => {
  let hostComponent: TestHostComponent;
  let regionDetailFixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterModule],
      declarations: [RegionDetailComponent, TestHostComponent]
    }).compileComponents();

    regionDetailFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = regionDetailFixture.componentInstance;
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegionDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Specific code and iso2Code for region', () => {
    fakeAsync(() => {
      hostComponent.region = [
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
      regionDetailFixture.detectChanges();
      expect(regionDetailFixture.debugElement.query(By.css('.region-view__code'))
      .nativeElement.textContent.trim())
      .toEqual(`${hostComponent.componentRegionDetailComponent.region[0].id} - ${hostComponent.componentRegionDetailComponent.region[0].iso2Code}`);
    });
  });
});
