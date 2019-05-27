import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'cours',
        loadChildren: './cours/cours.module#PromoAppCoursModule'
      },
      {
        path: 'apprenant',
        loadChildren: './apprenant/apprenant.module#PromoAppApprenantModule'
      },
      {
        path: 'cours',
        loadChildren: './cours/cours.module#PromoAppCoursModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PromoAppEntityModule {}
