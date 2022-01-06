import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triang';

  teruletVisible=false;

triangForm = new FormGroup ( {
  alap : new FormControl (''),
  magassag : new FormControl(''),
  terulet : new FormControl('')
});
 


  onClickSzamit(){
    let alap = Number(this.triangForm.value.alap);
    let magassag = Number(this.triangForm.value.magassag);
    let terulet = alap*magassag/2;
    this.triangForm.patchValue({terulet:terulet});

    console.log(terulet);
    this.teruletVisible=true;
    
  }

}