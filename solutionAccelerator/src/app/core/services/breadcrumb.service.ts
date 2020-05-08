import { Injectable } from '@angular/core';
import { Settings, AppSettings } from '@app/config/settings/app.settings';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {
    private pageTitle: string;
    private breadcrumbs: {
        name: string;
        url: string
    }[] = [];
    private settings: Settings;
    constructor(
        private appSettings: AppSettings,
        private title: Title,
        private router: Router) {
        this.settings = this.appSettings.settings;
    }
    init() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' > ' + breadcrumb.name;
                })
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        })
    }
    private parseRoute(node: ActivatedRouteSnapshot) {
        console.log(node)
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments: UrlSegment[] = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                })
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
}