import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  exports: [
    NzLayoutModule,
    NzButtonModule,
  ]
})
export class AppAntDesignModule {

}
