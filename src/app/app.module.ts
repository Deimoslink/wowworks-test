import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { LoggedInGuard } from './app.guard';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';

import { UserService } from './service/user.service';
import { TableComponent } from './table/table.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FlexComponent } from './flex/flex.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    SliderComponent,
    LoginComponent,
    TableComponent,
    SortByPipe,
    SearchPipe,
    FlexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
