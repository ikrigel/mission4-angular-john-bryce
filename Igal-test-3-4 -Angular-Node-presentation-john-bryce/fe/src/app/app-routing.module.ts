import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/layout-area/page404/page404.component';
import { AddOperationComponent } from './components/main-area/add-operation/add-operation.component';
import { MainComponent } from './components/main-area/main/main.component';

const routes: Routes = [
    { path: "home", component: MainComponent },
    { path: "add", component: AddOperationComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }, // pathMath: "full" --> exact
    { path: "**", component: Page404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
