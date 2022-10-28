import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  javascript: Skill = new Skill('javascript', 'js', 'www.siteJs.org');

  typescript: Skill = new Skill('typescript', 'ts', 'www.siteTs.org');

  developer: Developer = new Developer('Doe', 'John', 35, 'm', 'bla bla bla', [
    this.javascript,
    this.typescript,
  ]);
  console = console;

  ngOnInit(): void {
  }

}
