import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { EventService } from './service/event-service.service'
import { UserService } from './service/user-service.service'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { SearchByLocationComponent } from './search-by-location/search-by-location.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventFormComponent,
    UserFormComponent,
    SearchByLocationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EventService, UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
