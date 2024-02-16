import { NgModule } from '@angular/core';import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import {ChatComponent} from '../chat/chat.component';

@NgModule({
  declarations: [
    EnviromentComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [EnviromentComponent],
  providers: [
  ]
})
export class EnviromentModule { }