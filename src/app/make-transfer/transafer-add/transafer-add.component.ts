import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITransactionObject } from '../transfer-type';

@Component({
  selector: 'app-transafer-add',
  templateUrl: './transafer-add.component.html',
  styleUrls: ['./transafer-add.component.scss']
})
export class TransaferAddComponent implements OnInit {

  @Input() moneyTransferForm!: FormGroup;

  @Output() sendTransferEvent = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  get f() { return this.moneyTransferForm.controls; }

  triggerSubmit(content: any) {
    this.modalService.open(content);
  }

  sendTransfer() {
    const { amount, toAccount, fromAccount } = this.moneyTransferForm.value;
    const newTransaction: ITransactionObject = {
      categoryCode: "#12a580",
      dates: {
        "valueDate": new Date().getTime()
      },
      "transaction": {
        "amountCurrency": {
          "amount": amount,
          "currencyCode": "EUR"
        },
        "type": "Salaries",
        "creditDebitIndicator": "CRDT"
      },
      "merchant": {
        "name": toAccount,
        "accountNumber": fromAccount
      }
    }
    this.sendTransferEvent.emit(newTransaction);
    this.modalService.dismissAll();
  }
}
