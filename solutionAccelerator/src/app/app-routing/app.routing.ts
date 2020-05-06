import { FlowComponent } from '@app/pages/flow/flow.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DefaultLayoutComponent } from '@app/layouts/default-layout/default-layout.component';



export const routes: Routes = [
    {
        path: 'flow',
        component: FlowComponent
    },
    {
        path: 'ingestion',
        component: DefaultLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('@app/pages/ingestion/ingestion.module').then(m => m.IngestionModule), data: { breadcrumb: 'Data Ingestion' } },
        ]
    },
    { path: '', loadChildren: () => import('@app/pages/login/login.module').then(m => m.LoginModule) },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,  // <- uncomment this line for disable lazy load
    // useHash: true
});