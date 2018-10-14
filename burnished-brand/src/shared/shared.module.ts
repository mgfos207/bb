import { NgModule, ModuleWithProviders } from '@angular/core';
import { SHARED_COMPONENTS } from './components/_index';

const SHARED_MODULES = [
];

@NgModule(
  {
    declarations: [
      SHARED_COMPONENTS   
    ],
    imports: [
      SHARED_MODULES,
    ],
    entryComponents: [
      
    ],
    exports: [
      SHARED_MODULES
    , SHARED_COMPONENTS  
    ]
  })
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}