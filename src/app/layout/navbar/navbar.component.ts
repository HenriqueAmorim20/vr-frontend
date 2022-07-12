import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  darkMode: Boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
    this.setDarkMode();
  }

  setDarkMode() {
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    document.body.style.setProperty(
      '--background',
      this.darkMode ? '#282c2c' : '#fff'
    );
    document.body.style.setProperty(
      '--primary',
      this.darkMode ? '#fff' : '#282c2c'
    );
  }
}
