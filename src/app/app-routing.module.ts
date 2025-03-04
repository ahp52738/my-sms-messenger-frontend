import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendMessageComponent } from './send-message/send-message.component';
import { MessageListComponent } from './message-list/message-list.component';

const routes: Routes = [
  { path: 'send-message', component: SendMessageComponent },
  { path: 'message-list', component: MessageListComponent },
  { path: '', redirectTo: '/send-message', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
