import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {TagModel} from "ngx-chips/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = ['Pizza', 'Pasta', 'Parmesan'];
  fable = [];
  validator: any;
  public errorMessages = {
    'startsWithAt@': 'Your items need to start with "@"',
    'endsWith$': 'Your items need to end with "$"'
  };
  public onRemoving(tag: TagModel): Observable<TagModel> {
    const confirm = window.confirm('Do you really want to remove this tag?');
    return Observable
      .of(tag)
      .filter(() => confirm);
  }
  public onTextChange(event) {
    console.log(event);
    if (this.fable.length === 0) {
      this.fable = ['Not found'];
    }
  }
  public onItemAdded(event) {
    console.log(event);
  }
  public startsWithAt(control: FormControl) {
    if (control.value.charAt(0) !== '@') {
      //this.fable = ['Not found'];
      return {
        'startsWithAt@': true
      };
    }

    return null;
  }
  validators = [this.startsWithAt];

}
