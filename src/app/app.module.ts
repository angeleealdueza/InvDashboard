import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { InvDashboardComponent } from './inv-dashboard/inv-dashboard.component';
import { InvDashboardService } from './shared/inv-dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    InvDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InvDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
