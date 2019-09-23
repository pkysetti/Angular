import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorklistComponent } from './worklist/worklist.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: '',
    component: WorklistComponent,
    outlet: 'sidebar'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
