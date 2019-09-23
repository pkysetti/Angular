import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { WorklistComponent } from './worklist.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'worklist',  component: WorklistComponent, outlet:'sidebar',
  data: { title: extract('Worklist') }}])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WorklistRoutingModule {}
