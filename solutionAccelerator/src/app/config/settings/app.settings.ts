import { Injectable } from '@angular/core';

export class Settings {
    constructor(public name: string,
        public loadingSpinner: boolean,
        public fixedHeader: boolean,
        public sidenavIsOpened: boolean,
        public sidenavIsPinned: boolean,
        public sidenavUserBlock: boolean,
        public theme: string,
        public rtl: boolean) { }
}

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'Solution Accelerator 2.0',   //app name
        true,       //loadingSpinner
        true,       //fixedHeader
        true,       //sidenavIsOpened
        true,       //sidenavIsPinned  
        true,       //sidenavUserBlock 
        'primary',
        false       // true = rtl, false = ltr
    )
}