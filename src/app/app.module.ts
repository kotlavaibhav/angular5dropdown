import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SandBoxComponent } from './sand-box/sand-box.component';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    SandBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    RouterModule.forRoot([
    {
    	path:'',
    	redirectTo: '/home',
    	pathMatch: 'full'
    },
    {
    	path: 'home',
    	component: SandBoxComponent
    }
   ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
