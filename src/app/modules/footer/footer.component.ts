import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  styleUrls: ['app/modules/footer/footer.component.css'],
  selector: 'footer',
  templateUrl: 'app/modules/footer/footer.component.html'
})
export class FooterComponent implements OnInit {
  private isListPage:boolean = true;
  constructor(private _activatedRoute : ActivatedRoute) {
    
  }
  ngOnInit() {
    
  }
}
