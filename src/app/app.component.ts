import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlantPalace';
  isLoading = false;

  fetchData() {
    this.isLoading = true;
    this.isLoading = false;
  }
}
