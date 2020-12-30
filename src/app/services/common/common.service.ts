import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public loading: HTMLIonLoadingElement;

  constructor(
    private alertCrtl: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  // Loading
  async showLoader() {
    this.loading = await this.loadingCtrl.create({
      spinner: 'circular'
    });
    this.loading.present();
  }

  async showLoaderCustom(msg: string) {
    this.loading = await this.loadingCtrl.create({
      spinner: 'circular',
      message: msg
    });
    this.loading.present();
  }

  async showAlert(titulo: string, mensagem: string) {
    const alert = await this.alertCrtl.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlertAction(titulo: string, mensagem: string, handler: () => void) {
    const alert = await this.alertCrtl.create({
      header: titulo,
      message: mensagem,
      buttons: [{
        text: 'OK',
        handler
      }]
    });
    await alert.present();
  }
}
