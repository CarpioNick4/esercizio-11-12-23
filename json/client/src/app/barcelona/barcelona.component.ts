import { Component } from '@angular/core';
import { Calcio } from '../models/models';
import { DataService } from '../data.service';
@Component({
  selector: 'app-barcelona',
  templateUrl: './barcelona.component.html',
  styleUrls: ['./barcelona.component.css']
})
export class BarcelonaComponent {
  squadra:Calcio[]
  constructor(private dataService: DataService) {
    this.squadra = this.dataService.s_Barca
   }
}
