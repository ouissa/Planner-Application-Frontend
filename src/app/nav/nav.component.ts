import { faCompass, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faTachometerAlt, faCalculator, faUser, faUserAlt, faChevronRight, faChevronLeft, faBars, faBell, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  filmIcon = faTachometerAlt;
  degreePlanIcon = faCompass;
  calculatorIcon = faCalculator;
  calendarIcon = faCalendarAlt;
  userIcon = faUser;
  userAltIcon = faUserAlt;
  chevronOneIcon = faChevronRight;
  chevronTwoIcon = faChevronLeft;
  barsIcon = faBars;
  bellIcon = faBell;
  cogsIcon = faCogs;
  signOutIcon = faSignOutAlt;


  isCollapsed = false;
  isAlertsClicked = false;
  isProfileClicked = false;

  
  Name = "Youssef Gaimes";
  ImageURL = './assets/WhatsApp Image 2020-08-31 at 10.21.04 AM.jpeg';
  title = 'Planner';
  constructor() { }
  collapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  alertClick(){
    this.isAlertsClicked = !this.isAlertsClicked;
  }
  profileClick(){
    this.isProfileClicked = !this.isProfileClicked;
  }
}
