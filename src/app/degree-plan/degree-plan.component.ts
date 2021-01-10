import { AlertService } from './../_alert/alert.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-degree-plan',
  templateUrl: './degree-plan.component.html',
  styleUrls: ['./degree-plan.component.scss']
})
export class DegreePlanComponent implements OnInit {

  myControl = new FormControl();
  cogs = faCogs;
  courses = [
    {
      co_requisites: [
        "MTH 1304"
      ],
      pre_requisites: [
        "CSC 1401"
      ],
      course_code: "CSC 2302",
      title: "Data Structures",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "MTH 1311",
      title: "Calculus I: Differential Calculus",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "CHE 1401",
      title: "General Chemistry I",
      credits: 4
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "BIO 1401",
      title: "Principles of Biology",
      credits: 4
    },
    {
      co_requisites: [],
      pre_requisites: [
        "ENG 1301",
        "FAS 1220"
      ],
      course_code: "LIT 2301",
      title: "Major Works in World Literature",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "FAS 1220"
      ],
      course_code: "HUM 2301",
      title: "Islamic Art & Architecture",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "FAS 1220"
      ],
      course_code: "HUM 2302",
      title: "Introduction to the Study of",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "LIT 2304",
      title: "Introduction to Arabic Literature",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "CSC 1401",
      title: "Computer Programming",
      credits: 4
    },
    {
      co_requisites: [],
      pre_requisites: [
        "FAS 1220"
      ],
      course_code: "HUM 2306",
      title: "Comparative Religion",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "ENG 1301",
        "FAS 1220"
      ],
      course_code: "PHI 2301",
      title: "Philosophical Thought",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "ENG 1301",
        "FAS 1220"
      ],
      course_code: "PHI 2302",
      title: "History of Ideas",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "EGR 2201",
      title: "Introduction to Engineering",
      credits: 2
    },
    {
      co_requisites: [
        "FAS 1220"
      ],
      pre_requisites: [],
      course_code: "HIS 1301",
      title: "History of the Arab World",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "ENG 1301",
        "FAS 1220"
      ],
      course_code: "HIS 2301",
      title: "Contemporary World History",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "ENG 1301",
        "FAS 1220"
      ],
      course_code: "PSC 2301",
      title: "Comparative Political Systems",
      credits: 3
    },
    {
      co_requisites: ["FAS 0210"],
      pre_requisites: [],
      course_code: "ENG 1301",
      title: "English Composition I",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "FAS 0210",
      title: "Strategic Academic Skills",
      credits: 2
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "LIT 2305",
      title: "World Literature in Arabic",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "ECO 1300",
      title: "Introduction to Economics",
      credits: 3
    },
    {
      co_requisites: [
        "FAS 1220"
      ],
      pre_requisites: [],
      course_code: "GEO 1301",
      title: "Introduction to Geography",
      credits: 3
    },
    {
      co_requisites: [
        "FAS 1220"
      ],
      pre_requisites: [],
      course_code: "PSY 1301",
      title: "Introduction to Psychology",
      credits: 3
    },
    {
      co_requisites: [
        "FAS 1220"
      ],
      pre_requisites: [],
      course_code: "SOC 1301",
      title: "Principles of Sociology",
      credits: 3
    },
    {
      co_requisites: [
        "FAS 1220"
      ],
      pre_requisites: [],
      course_code: "SSC 1310",
      title: "Introduction to Anthropology",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "ENG 1301"
      ],
      course_code: "COM 1301",
      title: "Public Speaking",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "FAS 0210",
        "FAS 1220",
        "ENG 1301",
        "COM 1301"
      ],
      course_code: "ENG 2303",
      title: "Technical Writing",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "FAS 0210"
      ],
      course_code: "FAS 1220",
      title: "Introduction to Critical Thinking",
      credits: 2
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "MTH 1304",
      title: "Discrete Mathematics for Engineers",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "MTH 1311"
      ],
      course_code: "MTH 1312",
      title: "Calculus II: Integral Calculus",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "MTH 1312"
      ],
      course_code: "MTH 2301",
      title: "Multivariable Calculus",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "MTH 2301"
      ],
      course_code: "MTH 3301",
      title: "Probability & Statistics for Engineers",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "MTH 2301"
      ],
      course_code: "MTH 2303",
      title: "Linear Algebra and Matrix Theory",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "MTH 2303"
      ],
      course_code: "MTH 2304",
      title: "Differential Equations",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 3326"
      ],
      course_code: "CSC 3329",
      title: "IoT and Big Data Streaming",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "EGR 1201",
        "CSC 3326"
      ],
      course_code: "CSC 3327",
      title: "Internet Technologies",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 3352",
        "EGR 1201"
      ],
      course_code: "CSC 3353",
      title: "Computer Networks",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 3326"
      ],
      course_code: "CSC 3358",
      title: "Blockchain Business Application",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 2303",
        "EGR 1201"
      ],
      course_code: "CSC 3309",
      title: "Artificial Intelligence",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "MTH 1303"
      ],
      course_code: "PHY 1401",
      title: "Physics I",
      credits: 4
    },
    {
      co_requisites: [],
      pre_requisites: [
        "PHY 1401",
        "MTH 1312"
      ],
      course_code: "PHY 1402",
      title: "Physics II",
      credits: 4
    },
    {
      co_requisites: [
        "PHY 1402"
      ],
      pre_requisites: [],
      course_code: "EGR 3331",
      title: "Digital Design",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 2302",
        "EGR 3331"
      ],
      course_code: "CSC 2304",
      title: "Computer Architecture",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 2303",
        "CSC 2304",
        "EGR 1201"
      ],
      course_code: "CSC 3352",
      title: "Computer Communication",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 2303",
        "CSC 2304",
        "EGR 1201"
      ],
      course_code: "CSC 3351",
      title: "Operating Systems",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 2302",
        "EGR 2201"
      ],
      course_code: "CSC 3323",
      title: "Analysis of Algorithms",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 2303",
        "EGR 2201"
      ],
      course_code: "CSC 3315",
      title: "Languages And Compilers",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "MTH 1312",
        "EGR 1201"
      ],
      course_code: "EGR 2302",
      title: "Engineering Economics",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 2302"
      ],
      course_code: "CSC 2303",
      title: "Advanced Programming",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "ENG 2303",
        "FRN 3310"
      ],
      course_code: "EGR 4300",
      title: "Internship",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "ENG 2303"
      ],
      course_code: "EGR 4402",
      title: "Capstone Design",
      credits: 4
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 2302",
        "EGR 1201"
      ],
      course_code: "CSC 3324",
      title: "Software Engineering I",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "CSC 3324",
        "EGR 2201"
      ],
      course_code: "CSC 3326",
      title: "Database Systems",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "FYE 1101",
      title: "First Year Experience Seminar I",
      credits: 1
    },
    {
      co_requisites: [],
      pre_requisites: [
        "FYE 1101"
      ],
      course_code: "FYE 1102",
      title: "First Year Experience Seminar II",
      credits: 1
    },
    {
      co_requisites: [],
      pre_requisites: [
        "MTH 1311"
      ],
      course_code: "ACC 2301",
      title: "Accounting Principles I",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [
        "ENG 1301"
      ],
      course_code: "ENG 2320",
      title: "Creative Writing",
      credits: 3
    },
    {
      co_requisites: [],
      pre_requisites: [],
      course_code: "SPN 1301",
      title: "Beginning Spanish I",
      credits: 3
    }
  ];
  filteredOptions: Observable<any[]>;
  LIST_IDS = [];
  semesters: Semester[] = [
    { id: "semester-0", title: "Fall 2018", courses: [], credits: 0 },
    { id: "semester-1", title: "Spring 2019", courses: [], credits: 0 },
    { id: "semester-2", title: "Summer 2019", courses: [], credits: 0 },
    { id: "semester-3", title: "Fall 2019", courses: [], credits: 0 },
    { id: "semester-4", title: "Spring 2020", courses: [], credits: 0 },
    { id: "semester-5", title: "Summer 2020", courses: [], credits: 0 },
    { id: "semester-6", title: "Fall 2020", courses: [], credits: 0 },
    { id: "semester-7", title: "Spring 2021", courses: [], credits: 0 },
    { id: "semester-8", title: "Summer 2021", courses: [], credits: 0 },
    { id: "semester-9", title: "Fall 2021", courses: [], credits: 0 },
    { id: "semester-10", title: "Spring 2022", courses: [], credits: 0 },
    { id: "semester-11", title: "Summer 2022", courses: [], credits: 0 }
  ];
  constructor(private http: HttpClient, private alertService: AlertService) {
    // http.get("http://planner-back-end.glitch.me/semesters", { headers: { id: "baba" } }).subscribe((resp: Object[]) => {
    //   console.log(resp);
    // });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    for (let semester of this.semesters) {
      this.LIST_IDS.push(semester.id);
    };
  }
  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.courses.filter(option => option.course_code.toLowerCase().includes(filterValue));
  }
  drop(event: CdkDragDrop<object[]>) {
    var course: Course;
    var compatibility: Boolean[] = [];
    if (event.previousContainer.id === "courseList") {
      course = this.courses[event.previousIndex];
    }
    else {
      let index: number = parseInt(event.previousContainer.id.replace(/\D/g, ''));
      course = this.semesters[index].courses[event.previousIndex];
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      if (event.container.id !== "courseList") {
        compatibility.length = course.pre_requisites.length;
        compatibility.fill(false);
        for (let k = 0; k < course.pre_requisites.length; k++) {
          let course_code = course.pre_requisites[k];
          let index: number = parseInt(event.container.id[9]);
          let prevsem: Semester[] = cloneDeep(this.semesters);
          prevsem.splice(index, 10);
          for (let i = 0; i < index; i++) {
            for (let course of prevsem[i].courses) {
              if (course.course_code == course_code) {
                compatibility[k] = true;
              }
            }
          }
        }
        if (this.allEqual(compatibility)) {
          var k = this.semesters.findIndex((semester) => {
            if (event.container.id === semester.id) {
              return true;
            }
          });
          var check = this.semesters[k].credits;
            check += course.credits;
          if(check > 21){
            var message: string = course.course_code + " Cannot be added to " + this.semesters[k].title+ " because it would exceed 21 credits.";
            this.alertService.info(message, { autoClose: true });
            return;
          }
          else{
            this.semesters[k].credits+= course.credits;
          }
          if (event.previousContainer.id !== "courseList" && event.container.id !== "courseList") {
            var k = this.semesters.findIndex((semester) => {
              if (event.previousContainer.id === semester.id) {
                return true;
              }
            });
            this.semesters[k].credits -= course.credits;
          }
          if (course.co_requisites.length < 1 || course.co_requisites == undefined) {
            transferArrayItem(event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex);
          }
          else {
            var boi = this.semesters.findIndex((semester) => {
              if (event.container.id === semester.id) {
                return true;
              }
            });
            for (let k = 0; k < course.co_requisites.length; k++) {
              let course_code = course.co_requisites[k];
              let co_number = this.courses.findIndex((course) => {
                if (course.course_code === course_code)
                  return true;
                return false;
              });
              let co_course = this.courses.find((course) => {
                if (course.course_code === course_code)
                  return true;
                return false;
              });
              transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
              this.semesters[boi].credits += co_course.credits;
              transferArrayItem(event.previousContainer.data,
                event.container.data,
                co_number - 1,
                event.currentIndex + 1);
              var message: string = co_course.course_code + " has been added automatically because it is a co-requisite for " + course.course_code
              this.alertService.success(message, { autoClose: true });
            }
          }
        }
        else {
          var message: string = course.course_code + " cannot be added until its pre-requisites are added first which are: ";
          for(let option of course.pre_requisites){
            message = message +" "+ option;
          }
          this.alertService.warn(message, { autoClose: true });
        }
      }
      else {
        if (event.previousContainer.id === "courseList" || event.container.id === "courseList") {
          var k = this.semesters.findIndex((semester) => {
            if (event.previousContainer.id === semester.id) {
              return true;
            }
          });
          this.semesters[k].credits -= course.credits;
        }
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
  }
  allEqual(arr: Boolean[]) {
    var length = 0;
    for (let item of arr) {
      if (item === true) {
        length++;
      }
    }
    if (length === arr.length)
      return true;
    else
      return false;
  }
  scroll() {
    document.getElementById(this.myControl.value).scrollIntoView();
  }
  demo(){
    var message: string = "This website is only intended for demonstration purposes. This feature will not be available until the release of a version 1";
    this.alertService.info(message, { autoClose: true });
  }
  noReturnPredicate() {
    return true;
  }
}
interface Course {
  course_code?: string,
  title?: string,
  pre_requisites?: string[],
  co_requisites?: string[],
  credits?: number
}
interface Semester {
  id: string,
  title: string,
  courses: Course[],
  credits: number,
}