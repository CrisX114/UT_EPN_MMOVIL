import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataMes } from 'src/app/models/datames.interface';

@Component({
  selector: 'app-data-mes',
  templateUrl: './data-mes.page.html',
  styleUrls: ['./data-mes.page.css'],
})
export class DataMesPage implements OnInit {
  @Input() dataMes: DataMes;

  //variable que recupera el usuario autenticado desde el servicio authService
  @Input() currentUser: String;
  @Input() currentUserId: String;
  //variable para controlar si es Admin o Empleado(restringe la visualización de registros)
  @Input() isAdmin: boolean;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  closeModal() {
    this.modalController.dismiss();
  }
}
