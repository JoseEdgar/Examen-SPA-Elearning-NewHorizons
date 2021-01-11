import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../../../modules/home/interface/cursointerface';

@Component({
  selector: 'app-shared-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  @Input() cursoinput: ICurso;

  constructor() { }

  ngOnInit(): void {
         
  }

}
