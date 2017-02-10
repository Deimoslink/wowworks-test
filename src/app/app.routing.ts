import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { InfoComponent } from './info/info.component';
import { SliderComponent } from './slider/slider.component';
import { TableComponent } from "./table/table.component";
import { LoginComponent } from "./login/login.component";

import { LoggedInGuard } from './app.guard';
import { FlexComponent } from "./flex/flex.component";


const APP_ROUTES: Routes = [
  { path: 'copy', component: InfoComponent, canActivate: [LoggedInGuard] },
  { path: 'slider', component: SliderComponent, canActivate: [LoggedInGuard],
    children: [
      {path: 'new', component: TableComponent},
      {path: 'active', component: TableComponent},
      {path: 'canceled', component: TableComponent},
      {path: 'finished', component: TableComponent},
      {path: 'pending', component: TableComponent},
      {path: 'drafts', component: TableComponent}
    ]},
  { path: 'table', component: TableComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'flex', component: FlexComponent },

  { path: '', redirectTo: 'info', pathMatch: 'full' }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
