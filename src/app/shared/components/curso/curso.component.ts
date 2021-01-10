import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  @Input() curso: any[];
  @Input() coverWitdh: number;

  constructor() { }

  ngOnInit(): void {
  }

}
