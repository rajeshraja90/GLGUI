import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectmanagement-gui';

  
 ngOnInit() {
  
}

loggedin()
{
  return localStorage.getItem('token');
}
onLogout()
{
  localStorage.removeItem('token');
}

}


