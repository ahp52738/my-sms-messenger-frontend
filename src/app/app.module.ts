import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MessageListComponent } from './message-list/message-list.component';
import { LoginComponent } from './login/login.component'; // ✅ Import Standalone Component

const routes: Routes = [
  { path: '', component: MessageListComponent }, 
  { path: 'login', component: LoginComponent }, // ✅ Add login route
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent // ✅ Do NOT declare standalone components
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    MessageListComponent, // ✅ Import Standalone Component
    LoginComponent // ✅ Import Standalone Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
