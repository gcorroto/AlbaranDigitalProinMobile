import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { HomeRoutingModule } from './router/albaran-routing.module'
import { AlbaranComponent } from './component/albaran.component'
import { ItemDetailComponent } from './component/item-detail/item-detail.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [AlbaranComponent, ItemDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AlbaranModule {}
