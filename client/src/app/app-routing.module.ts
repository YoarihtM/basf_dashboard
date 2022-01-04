import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TanksComponent } from './components/tanks/tanks.component';
import { TankTableComponent } from './components/tank-table/tank-table.component';
import { TankDetailComponent } from './components/tank-detail/tank-detail.component';
import { SolventeTableComponent } from './components/solvente-table/solvente-table.component';
import { LotesPeqTableComponent } from './components/lotes-peq-table/lotes-peq-table.component';

/* These are the routes of the differente components and pages, as an initial default path
is the tanks page, deploying the full list of tanks. */
const routes: Routes = [
  {path: 'tanks', component: TanksComponent},
  {path: 'tanks-visual', component: TankTableComponent},
  {path: 'tanks-visual-solvent', component: SolventeTableComponent},
  {path: 'tanks-visual-lp', component: LotesPeqTableComponent},
  {path: 'detail/:id', component: TankDetailComponent },
  // the following is the default path and the fallback for any others.
  {path: '**', pathMatch: 'full', redirectTo: 'tanks'},
];


/* it is neccessary to import the Router module in order to use the different routes */
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
