import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "header-bar",
    templateUrl: "./app/components/header-bar/header-bar.component.html",
    styleUrls: ["./app/components/header-bar/header-bar.component.css"]
})
export class HeaderBarComponent {

    constructor( private router: Router) { }

    /*-----------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Wine Path ~~~                                                                                           |
     |-----------------------------------------------------------------------------------------------------------------|
     |-----------------------------------------------------------------------------------------------------------------*/
    verPostBusqueda(busqueda: HTMLInputElement) {
        this.router.navigate(['/posts/search', busqueda])
    }

 }
