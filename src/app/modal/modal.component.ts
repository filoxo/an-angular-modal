import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer } from '@angular/core';

interface ModalConfig extends Object {
  title?: string;
  id?: string;
}

const defaultConfig = <ModalConfig>{};

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
  @ViewChild('modal') modal: ElementRef;
  private show: boolean = false;
  private id: string;
  private titleId: string;
  private contentId: string;
  private html: HTMLElement = document.querySelector('html');

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    this.options = Object.assign({}, defaultConfig, this.options);
    this.id = this.options.id || `modal-${id++}`;
    this.titleId = `${this.id}-title`;
    this.contentId = `${this.id}-content`;
  }

  ngAfterViewChecked() {
    if (!!this.modal) {
      if (this.show) {
        this.modal.nativeElement.focus();
      } else {
        console.log('refocus on trigger')
      }
    }
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

  private focus(event?: Event) {
    if (!!event && this.modal && !this.modal.nativeElement.contains(event.target)) {
      this.renderer.invokeElementMethod(this.modal.nativeElement, 'focus');
    } else {
      this.renderer.invokeElementMethod(this.modal.nativeElement, 'focus')
    }
  }

}
