import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TanksService } from 'src/app/services/tanks.service';
import { Tank } from '../../Tank';
// import { TANKS } from '../../mock-tanks';
import * as moment from 'moment';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css'],
})
export class TanksComponent implements OnInit {
  selectedTank?: Tank;

  tanks: any = [];
  diff: number;

  semaphoreGreen: number = 0;
  semaphoreYellow: number = 0;
  semaphoreRed: number = 0;
  totalTanks: number = 0;

  constructor(
    private tanksService: TanksService,
  ) { }

  onSelect(tank: Tank): void {
    this.selectedTank = tank;
  }

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
            this.semaphoreRed++;
            this.totalTanks++
          } else {
            if (diff == 1 || diff == 0) {
              tank.status = 'warning';
              this.semaphoreYellow++;
              this.totalTanks++
            } else {
              if (diff >= 2) {
                tank.status = 'success';
                this.semaphoreGreen++;
                this.totalTanks++
              }
            }
          }
        });
      },
      (err) => console.log(err)
    );

  }
  getPercentage(semaphore: number) {
    return Math.floor((semaphore / this.totalTanks ) * 100)
    
    
  }


}
