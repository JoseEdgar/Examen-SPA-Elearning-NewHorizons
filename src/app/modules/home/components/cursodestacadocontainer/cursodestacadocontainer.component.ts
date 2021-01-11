import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { ICurso } from '../../interface/cursointerface';

@Component({
  selector: 'app-cursodestacadocontainer',
  templateUrl: './cursodestacadocontainer.component.html',
  styleUrls: ['./cursodestacadocontainer.component.scss']
})
export class CursodestacadocontainerComponent implements OnInit {

  varcursodestacado: ICurso[] = [];

  constructor(private cursodestacadoserv: CursoService) { }

  ngOnInit(): void {
  }

}
