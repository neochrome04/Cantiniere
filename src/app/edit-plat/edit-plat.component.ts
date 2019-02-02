import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {PlatServiceService} from '../../Services/plat-service.service';
import {Plat} from '../models/plat';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.scss']
})
export class EditPlatComponent implements OnInit {
    @Input() key: string;
    plat: Plat[];

    constructor(private activeModal: NgbActiveModal, private PlatService: PlatServiceService) {
    }

    ngOnInit() {
      this.getPlatByKey(this.key);
    }

    editPlat(updatedPlat) {
        this.PlatService.editPlat(updatedPlat.form.value, this.key)
            .subscribe(data => {
                /*this.edit.emit(updatedPlat.form.value);*/
                this.activeModal.close();
            });
    }

    getPlatByKey(key) {
        this.PlatService.getPlatByKey(key)
            .subscribe(data => {
                this.plat = data;
            });
    }
}
