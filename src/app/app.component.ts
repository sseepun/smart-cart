import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private users: Array<any>;
  private posts: Array<any>;
  
  // Create an instance of the DataService through dependency injection
  constructor(private dataService: DataService) {
    // Access the Data Service's getUsers() method we defined
    this.dataService.getUsers()
        .subscribe(res => this.users = res);
    this.dataService.getPosts()
        .subscribe(res => this.posts = res);
  }

}
