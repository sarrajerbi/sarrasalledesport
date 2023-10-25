import { Component } from '@angular/core';
import{salledesport} from '../model/salledesport.model'
import { SalledesportService } from '../services/salledesport.service';

@Component({
  selector: 'app-add-salledesport',
  templateUrl: './add-salledesport.component.html',
  styleUrls: ['./add-salledesport.component.css']
})
export class AddSalledesportComponent {
  newsalledesport= new salledesport();
  
  constructor(private salledesportservice:SalledesportService)
  {

  }
  addsalledesport(){
    //console.log(this.newsalledesport);
    this.salledesportservice.ajoutersalledesport(this.newsalledesport);
    }
}
