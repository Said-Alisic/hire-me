import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  exports: [
    NzLayoutModule,
    NzButtonModule,
    NzMenuModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
  ]
})
export class AppAntDesignModule {

}
