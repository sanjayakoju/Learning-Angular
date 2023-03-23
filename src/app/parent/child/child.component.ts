import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,

  // Removed shadow DOM
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {
  //Getting Data to child from parent
  @Input() item: string | undefined ;

  // Sending data to parent
  @Output() newItemEvent = new EventEmitter<string>();

  // Use for passing local reference from child to parent component and vice versa
  // @ViewChild('newItem', {static : true})
  student: any = {};

  addNewItem(value: string) {
    debugger
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
    console.log(this.item);
  }
}
