import { Component, OnInit } from '@angular/core';
import { GreysolutionSeriveService } from '../services/greysolution-serive.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private Service: GreysolutionSeriveService) {}

  ngOnInit(): void {}
}
