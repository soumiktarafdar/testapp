import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HomeModule } from './home/home.module';
import { InvestmentModule } from './investment/investment.module';
import { PreferenceModule } from './preference/preference.module';
import { HistoryModule } from './history/history.module';
import { ConfirmationModule } from './confirmation/confirmation.module';
import { ForgotpasswordModule } from './forgotpassword/forgotpassword.module';
import { DetailsModule } from './details/details.module';
import { PendingModule } from './pending/pending.module';
import { VerificationModule } from './verification/verification.module';
import { PrefresultsModule } from './prefresults/prefresults.module';
import { LinkbankModule } from './linkbank/linkbank.module';
import { ReinvestmentModule } from './reinvestment/reinvestment.module';


import {
  FooterComponent,
  HeaderComponent
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    rootRouting,
    LoginModule,
    RegisterModule,
    HomeModule,
    InvestmentModule,
    PreferenceModule,
    HistoryModule,
    ConfirmationModule,
    ForgotpasswordModule,
    DetailsModule,
    PendingModule,
    VerificationModule,
    PrefresultsModule,
    LinkbankModule,
    ReinvestmentModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
