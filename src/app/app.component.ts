import { Component }        from '@angular/core';
import { environment }      from './../environments/environment';

interface Nav {
  path:string,
  label:string,
  styleClass:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'feature-flipping-frontend';

  links : Nav[] = [
    {path:"/"         , label:"Home"      ,styleClass:"home"},
    {path:"/documents" , label:"Documents"  ,styleClass:"documents"},
  ]

  constructor(){
    console.log(environment.urls.api);
  }
}
