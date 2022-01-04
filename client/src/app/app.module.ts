import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingComponent } from './components/common/heading/heading.component';
import { TankTableComponent } from './components/tank-table/tank-table.component';
import { TanksComponent } from './components/tanks/tanks.component';

import { TanksService } from './services/tanks.service';
import { FormsModule } from '@angular/forms';
import { TankDetailComponent } from './components/tank-detail/tank-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SolventeTableComponent } from './components/solvente-table/solvente-table.component';
import { LotesPeqTableComponent } from './components/lotes-peq-table/lotes-peq-table.component';

/* There is a need to import all the modules used in this development, most of them are the different components, they are
automatically added by Angular */
@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    TankTableComponent,
    TanksComponent,
    TankDetailComponent,
    MessagesComponent,
    SolventeTableComponent,
    LotesPeqTableComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [TanksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
