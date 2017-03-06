import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface ModalConfig extends Object {
    title?: string;
    id?: string;
}

const defaultConfig = <ModalConfig> {};

let id = 0;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() options: ModalConfig;
  @Output() opened = new EventEmitter<any>();
  @Output() closed = new EventEmitter<any>();
  private show: boolean = false;
  private id: string;
  private titleId: string;
  private contentId: string;
  private html: HTMLElement = document.querySelector('html');

  constructor() {}

  ngOnInit() {
    this.options = Object.assign({}, defaultConfig, this.options);
    this.id = this.options.id || `modal-${id++}`;
    this.titleId = `${this.id}-title`;
    this.contentId = `${this.id}-content`;
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
