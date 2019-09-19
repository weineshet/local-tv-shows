import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentTvshowComponent } from './current-tvshow/current-tvshow.component';
import {TvshowService} from './tvshow/tvshow.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule} from'@angular/material';
import { CitySearchComponent } from './city-search/city-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CurrentTvshowComponent,
    CitySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TvshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
