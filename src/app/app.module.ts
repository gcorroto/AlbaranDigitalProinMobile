import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular"
import { HttpCacheModule } from './core/services/generic-service.module';
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpClientModule,
    NativeScriptUIDataFormModule,
    HttpCacheModule.forRoot(),
  ],
  exports: [HttpClientModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
