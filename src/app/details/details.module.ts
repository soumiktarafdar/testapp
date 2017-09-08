import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'investmentdetails',
    component: DetailsComponent,
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
    DetailsComponent
  ],
  providers: [
    
  ]
})
export class DetailsModule {}
