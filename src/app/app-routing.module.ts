import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPlatComponent} from './list-plat/list-plat.component';
import {AddPlatComponent} from './add-plat/add-plat.component';
import {EditPlatComponent} from './edit-plat/edit-plat.component';

const routes: Routes = [
    {
        path: 'list-plat',
        component: ListPlatComponent
    },
    {
        path: 'add-plat',
        component: AddPlatComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
