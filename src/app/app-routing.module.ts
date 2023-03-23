import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChildComponent} from "./parent/child/child.component";
import {ParentComponent} from "./parent/parent.component";
import {AuthGuard} from "./core/guard/auth.guard";

const routes: Routes = [
  {
    path: 'parent', component: ParentComponent, title: 'Parent',
    // Auth Guard/Guard/Route Guard Interface that a class can implement to be a guard deciding if a route can
    // be activated. If all guards return true , navigation continues.
    canActivate: [AuthGuard],
    children: [
      {path: 'child', component: ChildComponent, title: 'Child'}
    ]
  },
  /**
   * Catch all path, wild card route, make sure it should be the last once in array of routes
   *  Does not need to put component
   */
  {path: '**', redirectTo: 'parent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
