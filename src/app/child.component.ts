import { Component, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'app-child',
  template: `<div>
  
  <input type="text" class="form-control">

<button type="submit" (click)="childfunction()">Update</button> </div>
`,
})
export class ChildComponent {
  title = 'stock-updater';
  @Output() myEvent = new EventEmitter();

  childfunction() {
      this.myEvent.emit();
  }

}
