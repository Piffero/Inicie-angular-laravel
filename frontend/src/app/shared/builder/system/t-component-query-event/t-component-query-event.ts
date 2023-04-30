import { Injector } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

export class TComponentQueryEvent {
    protected _route!: ActivatedRoute;
    protected _router!: Router;

    constructor(injector: Injector) {
        this._route = injector.get(ActivatedRoute);
        this._router = injector.get(Router);
    }
}
