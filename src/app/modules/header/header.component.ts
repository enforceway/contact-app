import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  styleUrls: ['app/modules/header/header.component.css'],
  selector: 'header',
  templateUrl: 'app/modules/header/header.component.html'
})
export class HeaderComponent implements OnInit {
    @Input() title: string;
    @Input() isShowCreateButton: boolean;
    constructor(private _activatedRoute : ActivatedRoute) {
        
    }
    ngOnInit() {
        
    }
}
