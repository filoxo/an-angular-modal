import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() opened = new EventEmitter<any>();
  @Output() closed = new EventEmitter<any>();
  private show: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  open() {
    this.show = true;
    this.opened.emit(null);
  }

  close() {
    this.show = false;
    this.closed.emit(null)
  }

}
