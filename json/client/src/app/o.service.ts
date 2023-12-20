import { Injectable } from '@angular/core';
import { Calcio } from './models/models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OService {
  s_Madrid:Calcio[]
  s_Barca:Calcio[]

  
   constructor(private http: HttpClient) {}
    ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('/api').subscribe(data => {
    // Read the result field from the JSON response.
    this.s_Madrid = data["Real Madrid"];
    this.s_Barca = data["Barcelona"];
    
    });
    }}
