import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basket-quick-view',
  templateUrl: './basket-quick-view.component.html',
  styleUrls: ['./basket-quick-view.component.scss']
})
export class BasketQuickViewComponent implements OnInit {

  constructor(
    private modal: NgbModal,
    private router: Router
  ) { }

  viewCart(){
    this.modal.dismissAll()
    this.router.navigate(['/cart'])
  }

  ngOnInit(): void {
  }

  closePopup() {
    this.modal.dismissAll()
  }

}
