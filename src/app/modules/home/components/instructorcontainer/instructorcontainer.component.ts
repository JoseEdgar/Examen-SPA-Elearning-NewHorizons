import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { IInstructor } from '../instructor/interface/instructor';

@Component({
  selector: 'app-instructorcontainer',
  templateUrl: './instructorcontainer.component.html',
  styleUrls: ['./instructorcontainer.component.scss']
})
export class InstructorcontainerComponent implements OnInit {

  varinstructor: IInstructor[] = [];

  constructor(private instructorServ: InstructorService) { }

  ngOnInit(): void {
    this.getinstructor();
  }

  
  getinstructor() {
    this.instructorServ.getinstructor()
      .subscribe((res: IInstructor[]) => {
        this.varinstructor = res;
      }
      );
  }


}
