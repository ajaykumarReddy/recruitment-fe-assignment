import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITransactionObject } from '../transfer-type';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  @Input() transactionList!: ITransactionObject[];
  @Output() inputChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
