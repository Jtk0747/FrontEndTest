import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolTipComponent } from '../components/tool-tip/tool-tip.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactusComponent } from '../components/contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '../components/home/home.component';
import { TooltipDirective } from '../components/tool-tip/tooltip.directive';


@NgModule({
  declarations: [
    AppComponent,
    ToolTipComponent,
    AboutComponent,
    ContactusComponent,
    HomeComponent,
    TooltipDirective
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'aboutus', component: AboutComponent},
      {path: 'contactus', component: ContactusComponent}
    ]),
    AppRoutingModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
