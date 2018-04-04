import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { FullItalyMapComponent } from './fullitalymap-component/fullitalymap.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    FullItalyMapComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule,
    PipesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtwUjsIB14f0aHgdLk_JYnUrI0jvczMXw'
    }),
    AgmJsMarkerClustererModule
  ],
  exports: [
    FullItalyMapComponent
  ],
  entryComponents:[
  	FullItalyMapComponent
  ]
})
export class FullItalyMapModule {}
