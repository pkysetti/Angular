import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WorklistRoutingModule } from './worklist-routing.module';
import { WorklistComponent } from './worklist.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgbModule, WorklistRoutingModule],
  declarations: [WorklistComponent]
})
export class WorklistModule {}
