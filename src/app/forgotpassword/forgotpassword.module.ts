import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ForgotpasswordComponent } from './forgotpassword.component';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
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
    ForgotpasswordComponent
  ],
  providers: [
    
  ]
})
export class ForgotpasswordModule {}
