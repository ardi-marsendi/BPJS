import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-detail-pa',
  templateUrl: './detail-pa.component.html',
  styleUrls: ['./detail-pa.component.css']
})
export class DetailPaComponent implements OnInit {
  testModal: Modal | undefined
  constructor() { }

  ngOnInit(): void {
  }

  // open(){
  //   this.testModal = new bootstrap.Modal(document.querySelector('#testModal'))
  //   this.testModal.show()
  // }

}
