import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonService } from './common/common.service';
import { BaseService } from './http/base.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [BaseService, CommonService],
})
export class ServicesModule {}
