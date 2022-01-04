import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TanksService } from 'src/app/services/tanks.service';
import { Location } from '@angular/common';
import { Tank } from '../../Tank';
import * as moment from 'moment';

// Cuestión de totes

@Component({
  selector: 'app-tank-detail',
  templateUrl: './tank-detail.component.html',
  styleUrls: ['./tank-detail.component.css'],
})

/* This class is the handler of the logic used in the Tank Detail Component */
export class TankDetailComponent implements OnInit {
  tank?: any;
  startDate: string;
  deliveryDate: any;
  semaphore: string;

  constructor(
    private route: ActivatedRoute,
    private tankService: TanksService,
    private location: Location
  ) {}

  // On init we get the specific tank that was pressed
  ngOnInit(): void {
    this.getTank();
  }

  /* The tank id is obtained via the paramMap of the previous page, this would be associated with the argument that was passed in get Status.
  
  This method also sets the status of each tank in order to get the colors correctly*/
  getTank(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tankService.getTank(id).subscribe((tank) => {
      this.tank = tank;
      var today = moment();
      var deliveryDateMoment = moment(this.tank.deliveryDate, 'MM/DD/YYYY');
      var diff = deliveryDateMoment.diff(today, 'days');
      if (diff < 0) {
        this.semaphore = 'danger';
      } else {
        if (diff == 1 || diff == 0) {
          this.semaphore = 'warning';
        } else {
          if (diff >= 2) {
            this.semaphore = 'success';
          }
        }
      }
      console.log(this.semaphore);
    });
  }

  // Default back function
  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.tankService.updateTank(this.tank)
  //     .subscribe(() => this.goBack());
  // }
}
