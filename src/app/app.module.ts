import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BbUIModule } from './bb-ui/bb-ui.module';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransaferAddComponent } from './make-transfer/transafer-add/transafer-add.component';
import { TransactionListComponent } from './make-transfer/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeTransferComponent,
    TransaferAddComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    BbUIModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
