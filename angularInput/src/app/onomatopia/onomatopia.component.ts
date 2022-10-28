import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onomatopia',
  templateUrl: './onomatopia.component.html',
  styleUrls: ['./onomatopia.component.css']
})
export class OnomatopiaComponent implements OnInit {

  constructor() { }

  onomatopiaList: string[] = [];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopiaList.push(event);
  }

  ngOnInit(): void {
  }

}
