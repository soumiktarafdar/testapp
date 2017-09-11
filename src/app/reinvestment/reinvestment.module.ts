import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReinvestmentComponent } from './reinvestment.component';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: ReinvestmentComponent,
    resolve: {
      
    }
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule
  ],
  declarations: [
    ReinvestmentComponent
  ],
  providers: [
    
  ]
})
export class ReinvestmentModule {}
