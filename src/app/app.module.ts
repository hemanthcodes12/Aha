import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestreleasesComponent } from './latestreleases/latestreleases.component';
import { mollywoodmood } from './mollywoodmood/mollywoodmood.component';
import { AhaoriginalsComponent } from './ahaoriginals/ahaoriginals.component';



@NgModule({
  declarations: [
    AppComponent,
    LatestreleasesComponent,
    mollywoodmood,
    AhaoriginalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
