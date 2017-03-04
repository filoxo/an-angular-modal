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
  private html: HTMLElement = document.getElementsByTagName('html')[0];

  constructor() { }

  ngOnInit() {
  }

  open() {
    this.show = true;
    this.opened.emit(null);
    this.preventBgScrolling();
  }

  close() {
    this.show = false;
    this.closed.emit(null);
    this.preventBgScrolling();
  }

  private preventBgScrolling() {
      this.html.style.overflow = this.show ? 'hidden' : '';
  }

}
