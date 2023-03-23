import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MyserviceService} from "../service/myservice.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],

  // Removed shadow DOM
  encapsulation: ViewEncapsulation.None,
  providers: [MyserviceService]
})
export class ParentComponent implements OnInit {
  // Sending data to child
  currentItem = 'Television';

  date: Date = new Date();

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    debugger
    this.items.push(newItem);
  }

  welcomePromise = new Promise(resolve => {
    console.log("In Promise executor fn");

    resolve("Welcome!");
  });


  welcomeObservable$ = new Observable(observer => {
    console.log("In Observable producer fn");

    observer.next("Welcome!");
    observer.complete();

  });

  ngOnInit(): void {

    console.log("Before calling the then method");

    this.welcomePromise.then(console.log);

    debugger
    console.log("Before calling the subscribe method");

    this.welcomeObservable$.subscribe(console.log);
  }




}
