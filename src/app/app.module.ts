import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactActionsComponent } from './pages/contact-actions/contact-actions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreYouSureComponent } from './dialogs/are-you-sure/are-you-sure.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { SearchPipe } from './pipes/search/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactActionsComponent,
    AreYouSureComponent,
    ContactDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
