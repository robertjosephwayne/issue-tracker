import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/index';
import { modules } from './modules';

import { AppComponent } from './app.component';
import { IssuesComponent } from './components/issues/issues.component';
import { NewIssueComponent } from './components/new-issue/new-issue/new-issue.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    NewIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    modules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
