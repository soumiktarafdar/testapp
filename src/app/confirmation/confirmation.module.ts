import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConfirmationComponent } from './confirmation.component';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'confirmation',
    component: ConfirmationComponent,
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
    ConfirmationComponent
  ],
  providers: [
    
  ]
})
export class ConfirmationModule {}
