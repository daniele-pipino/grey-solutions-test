import { Component, OnInit } from '@angular/core';
import { Data } from 'src/model/data.modul';
import { GreysolutionSeriveService } from '../services/greysolution-serive.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor(private service: GreysolutionSeriveService) {}
  isLoading: boolean = true;

  data: Array<Data> = [];

  getData() {
    this.service.getData().subscribe((res: any) => {
      this.data = res;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.getData();
  }
}
