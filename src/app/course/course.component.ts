import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  getCourse(){
    return 'Here are some courses for u'
  }

  constructor() { }

  ngOnInit() {
  }

}
