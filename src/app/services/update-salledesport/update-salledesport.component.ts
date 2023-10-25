import { Component } from '@angular/core';
import { SalledesportService } from '../salledesport.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { salledesport } from 'src/app/model/salledesport.model';

@Component({
  selector: 'app-update-salledesport',
  templateUrl: './update-salledesport.component.html',
  styleUrls: ['./update-salledesport.component.css']
})
export class UpdateSalledesportComponent {
  currentsalledesport =new salledesport();
  constructor(private activateRoute: ActivatedRoute,
    private router :Router,
    private salledesportService: SalledesportService) { }
    ngOnInit() {
      // console.log(this.route.snapshot.params.id);
      this.currentsalledesport = this.salledesportService.consultersalledesport(this.activateRoute.snapshot. params['id']);
      console.log(this.currentsalledesport);
      } 
    updatesalledesport()
    {
       //console.log(this.currentsalledesport);
      this.salledesportService.updatesalledesport(this.currentsalledesport);
      this.router.navigate(['salledesport']);

    }
  }
      

