import { Component } from '@angular/core';
import { person } from "app/getset";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
  
   let guy1= new person("deepak rana",1);
   let isValid=guy1.isvalid();
   console.log(isValid);

  }
  
  
}
