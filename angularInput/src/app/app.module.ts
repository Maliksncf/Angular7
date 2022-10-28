import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { OnomatopiaComponent } from './onomatopia/onomatopia.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    SkillComponent,
    CreateOnomatopiaComponent,
    OnomatopiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
