import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server'; // or '@nguniversal/express-engine'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    AppRoutingModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
