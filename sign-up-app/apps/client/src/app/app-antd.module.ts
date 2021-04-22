import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  exports: [
    NzLayoutModule,
    NzButtonModule,
    NzListModule,
    NzMenuModule,
    NzTableModule,
  ]
})
export class AppAntDesignModule {

}
