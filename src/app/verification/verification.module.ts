import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VerificationComponent } from './verification.component';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'verification',
    component: VerificationComponent,
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
    VerificationComponent
  ],
  providers: [
    
  ]
})
export class VerificationModule {}
