import { Component, OnInit } from '@angular/core';
import {PlatServiceService} from '../../Services/plat-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {EditPlatComponent} from '../edit-plat/edit-plat.component';

@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.css']
})
export class ListPlatComponent implements OnInit {

  constructor(private PlatService: PlatServiceService, private modalService: NgbModal) { }
  plats: any[] = [];
  ngOnInit() {
    this.getPlat();
  }
  // Récupération des plats pour l'ajout dans la liste front
    getPlat(): void {
        this.PlatService.getPlat()
            .subscribe(data => {
                let cle = Object.keys(data);
                let donnees = Object.values(data);
                for (let i = 0; i < cle.length; i++) {
                    this.plats.push({key: cle[i], values:donnees[i]});
                }
            });
    }
    // Modification d'un plat sélectionné par sa 'key'
    editPlat(key) {
        const modalRef = this.modalService.open(EditPlatComponent);
        modalRef.componentInstance.key = key;
    }
    // Suppression d'un plat sélectionné par sa 'key'
    deletePlat(key) {

    }
}
