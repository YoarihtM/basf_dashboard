import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TanksService } from 'src/app/services/tanks.service';

@Component({
  selector: 'app-solvente-table',
  templateUrl: './solvente-table.component.html',
  styleUrls: ['./solvente-table.component.css'],
})

/* This class handles all the logic that has to do with the solvent-based table */
export class SolventeTableComponent implements OnInit {
  tanks: any = [];
  semaphoreGreen: number = 0;
  semaphoreYellow: number = 0;
  semaphoreRed: number = 0;
  totalTanks: number = 0;

  constructor(private tanksService: TanksService) {}

  /* On init we get the tanks of the table, we call the general API method and set the status for each of them
  for the status we use the Moment library, an open source resource to calculate the difference between dates.*/
  ngOnInit(): void {
    this.tanksService.getTanks().subscribe(
      (res) => {
        this.tanks = res;
        res.forEach((tank) => {
          var today = moment();
          var deliveryDateMoment = moment(tank.deliveryDate, 'MM/DD/YYYY');
          var diff = deliveryDateMoment.diff(today, 'days');
          if (diff < 0) {
            tank.status = 'danger';
          } else {
            if (diff == 1 || diff == 0) {
              tank.status = 'warning';
            } else {
              if (diff >= 2) {
                tank.status = 'success';
              } else {
                tank.status = 'secondary';
              }
            }
          }
        });
      },
      (err) => console.log(err)
    );
  }

    /* The get status method retrieves the status defined previously on the OnInit method, in this method we also
  count the instances of each type of tank status in order to populate the summary card */
  getStatus(id): string {
    
    for (var i = 0; i < this.tanks.length; i++)
      if (this.tanks[i].id == id) {
        this.totalTanks++;
        if (this.tanks[i].status == 'success') {
          this.semaphoreGreen++;
        } else {
          if (this.tanks[i].status == 'warning') {
            this.semaphoreYellow++;
          } else {
            if (this.tanks[i].status == 'danger') {
              this.semaphoreRed++;
            }
          }
        }
        return this.tanks[i].status;
      }
  }

  
  getPercentage(semaphore: number) {
    return Math.floor((semaphore / this.totalTanks ) * 100)
  }
}
