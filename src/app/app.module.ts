import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IndexModule } from './index/index.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { IndexComponent } from './index/index.component';
import { AppRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    IndexModule,
    CoreModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
