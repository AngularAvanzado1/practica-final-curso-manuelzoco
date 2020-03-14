import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageComponent } from './language.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [
    LanguageComponent,
  ],
  exports: [
    LanguageComponent,
  ],
})
export class LanguageModule {}
