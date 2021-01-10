import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursocontainer',
  templateUrl: './cursocontainer.component.html',
  styleUrls: ['./cursocontainer.component.scss']
})
export class CursocontainerComponent implements OnInit {

listCurso: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
