import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navside',
  templateUrl: './navside.component.html',
  styleUrls: ['./navside.component.scss']
})
export class NavsideComponent implements OnInit {

  @Output()
  clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
