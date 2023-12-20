import { Component } from '@angular/core';
import { Calcio } from '../models/models';
import { DataService } from '../data.service';
@Component({
  selector: 'app-madrid',
  templateUrl: './madrid.component.html',
  styleUrls: ['./madrid.component.css']
})
export class MadridComponent {
squadra:Calcio[]
constructor(private dataService: DataService) {
  this.squadra = this.dataService.s_Madrid
 }
}
