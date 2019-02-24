import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import routing
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlatComponent } from './list-plat/list-plat.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditPlatComponent } from './edit-plat/edit-plat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListPlatComponent,
    AddPlatComponent,
    EditPlatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
      EditPlatComponent
  ]
})
export class AppModule { }
