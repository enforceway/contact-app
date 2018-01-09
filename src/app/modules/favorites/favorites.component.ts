import {Component} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  styleUrls: ['app/modules/favorites/favorites.component.css'],
  selector: 'favorites',
  templateUrl: 'app/modules/favorites/favorites.component.html'
})
export class FavoriteComponent {
  constructor(private _router: Router) {
    // setTimeout(() => {
    //   this._router.navigate(["/detail", 1]);
    // });
    
  }
}
