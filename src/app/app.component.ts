import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFundamentals-Routing2';

  constructor(private _router:Router) { }

  onButtonClick() : void {
    this._router.navigate(['/leden']);
  }
}
