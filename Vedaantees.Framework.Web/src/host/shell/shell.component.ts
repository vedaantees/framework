import { Component } from '@angular/core';

@Component({
  selector: 'shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent 
{
    moduleName:string;

    constructor()
    {
      this.moduleName = "Aware";
    }
}
