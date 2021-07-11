import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransferService } from './transfer.service';
import { filter, map, startWith, tap, withLatestFrom } from 'rxjs/operators';
import { ITransactionObject } from './transfer-type';
import { combineLatest, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit {

  currentPage = 'list';

  moneyTransferForm = this.fb.group({
    fromAccount: [{ value: 'My Personal Account $5824', disabled: true }, Validators.required],
    toAccount: ['', Validators.required],
    amount: ['', Validators.required],
  });

  isSubmitted = false;
  private originalTransactionList: ITransactionObject[] = [];

  transactionList$: Observable<ITransactionObject[]> = this.transfer.getTransactionList().pipe(
    map(res => res.data),
    tap(res => {
      this.originalTransactionList = res;
    })
  );

  constructor(private fb: FormBuilder, private transfer: TransferService) { }

  ngOnInit() { }

  sendTransfer(newTransaction: ITransactionObject) {
    this.currentPage = 'list';
    this.originalTransactionList.push(newTransaction);

    this.transactionList$ = this.transactionList$.pipe(map(data => {
      return [newTransaction, ...data]
    }));
  }

  inputChange(merchantName: string) {
    console.log('merchange name...', merchantName);
    this.transactionList$ = this.transactionList$.pipe(
      map((data: ITransactionObject[]) => {
        const res = this.originalTransactionList.filter(obj => obj.merchant.name.toLocaleLowerCase().startsWith(merchantName));
        return res;
      }),
    );
  }

}
