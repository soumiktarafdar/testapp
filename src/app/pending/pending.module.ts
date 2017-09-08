import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PendingComponent } from './pending.component';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'pending',
    component: PendingComponent,
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
    PendingComponent
  ],
  providers: [
    
  ]
})
export class PendingModule {}
