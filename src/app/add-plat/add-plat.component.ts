import { Component, OnInit } from '@angular/core';
import {PlatServiceService} from '../../Services/plat-service.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  constructor(private PlatService: PlatServiceService) { }

  ngOnInit() {
  }
    addPlat(platForm) {
      console.log(platForm.value);
        this.PlatService.addPlat(platForm.value)
            .subscribe(data => {
                let plat: Object = {key: Object.values(data)[0], values: platForm.value};
                console.log(plat);
            });
    }
}
