import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DetailsComponent } from './details/details.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './history/history.component';
import { InvestmentComponent } from './investment/investment.component';
import { LinkbankComponent } from './linkbank/linkbank.component';
import { RegisterComponent } from './register/register.component';
import { PendingComponent } from './pending/pending.component';
import { PreferenceComponent } from './preference/preference.component';
import { PrefresultsComponent } from './prefresults/prefresults.component';
import { ReinvestmentComponent } from './reinvestment/reinvestment.component';


export const router: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'confirmation', component: ConfirmationComponent },
    { path: 'investmentdetails', component: DetailsComponent },
    { path: 'forgotpassword', component: HistoryComponent },
    { path: 'history', component: ForgotpasswordComponent },
    { path: 'investment', component: InvestmentComponent },
    { path: 'linkbank', component: LinkbankComponent },
    { path: 'preference', component: PreferenceComponent },
    { path: 'login', component: LoginComponent },
    { path: 'pending', component: PendingComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'prefresults', component: PrefresultsComponent},
    { path: 'reinvestment', component: ReinvestmentComponent} 
];

@NgModule({
  imports: [ RouterModule.forRoot(router) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ } 

export const routes: ModuleWithProviders = RouterModule.forRoot(router);