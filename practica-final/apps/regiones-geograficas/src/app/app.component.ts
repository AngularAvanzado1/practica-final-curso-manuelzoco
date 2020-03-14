import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'practica-final-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'regiones-geograficas';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
