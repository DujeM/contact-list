import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactActionsComponent } from './pages/contact-actions/contact-actions.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: 'create',
    component: ContactActionsComponent
  },
  {
    path: 'edit/:id',
    component: ContactActionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
