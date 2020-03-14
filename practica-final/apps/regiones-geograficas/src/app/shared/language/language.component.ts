import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rg-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  activeLanguage = 'en';

  constructor(private translate: TranslateService) {}

  useLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
  }
}
