import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PreferenceComponent } from './preference.component';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'preference',
    component: PreferenceComponent,
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
    PreferenceComponent
  ],
  providers: [
    
  ]
})
export class PreferenceModule {}
