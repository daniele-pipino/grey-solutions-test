import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/model/data.modul';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css'],
})
export class DataCardComponent implements OnInit {
  @Input()
  item!: Data;

  constructor() {}

  ngOnInit(): void {}
}
