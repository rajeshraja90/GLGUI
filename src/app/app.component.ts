import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectmanagement-gui';

  public isEditFormOpen = false;
  
  onButtonClicked()
  {
    this.isEditFormOpen=true;
  }

 ngOnInit() {
  
}

}


