import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InvestmentComponent } from './investment.component';
import { SharedModule } from '../shared';
import { PreferenceModule } from '../preference/preference.module';
import { HistoryModule } from '../history/history.module';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'investment',
    component: InvestmentComponent,
    resolve: {
      
    }
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
    PreferenceModule,
    HistoryModule
  ],
  declarations: [
    InvestmentComponent
  ],
  providers: [
    
  ]
})
export class InvestmentModule {}
