import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public loading: HTMLIonLoadingElement;

  constructor(
    private readonly alertCtrl: AlertController,
    private readonly loadingCtrl: LoadingController
  ) {}

  // Loading
  async showLoader() {
    this.loading = await this.loadingCtrl.create({
      spinner: 'circular',
    });
    this.loading.present();
  }

  async showLoaderCustom(msg: string) {
    this.loading = await this.loadingCtrl.create({
      spinner: 'circular',
      message: msg,
    });
    this.loading.present();
  }

  /**
   * @author helio.souza
   * @description Exibe um IonAlert com titulo e mensagem personalizadas, ativa e desativar o Alert o foco do Scanner.
   * @param titulo Title do IonAlert.
   * @param msg Mensagem do IonAlert.
   */
  async showAlert(titulo: string, msg: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }

  /**
   * @author helio.souza
   * @description Exibe um IonAlert com titulo e mensagem personalizadas, ativa e desativar o Alert o foco do Scanner.
   * @param titulo Title do IonAlert.
   * @param message Mensagem do IonAlert.
   * @param handler Arrow Function contendo ação para o botão confirmar.
   * @param allowClose Controla o dismiss do IonAlert. Default: true.
   * @param showCancel Controla a exibição do botão cancelar. Default: true.
   * @param cssClasses Array de classes CSS para estilizar o Alert.
   * @param inputs Array de Inputs.
   */
  async showAlertAction(
    base: { titulo: string; message: string; handler: (data: any) => any },
    options = {
      allowClose: true,
      showCancel: true,
      cssClasses: [''],
      inputs: [] as any[],
    }
  ): Promise<void> {
    const buttons = [];
    if (options.showCancel) {
      buttons.push(this.getCancelBtn());
    }
    buttons.push(this.getConfirmaBtn(base.handler));
    const alert = await this.alertCtrl.create({
      backdropDismiss: options.allowClose,
      cssClass: options?.cssClasses || [],
      inputs: options?.inputs || [],
      message: base.message,
      header: base.titulo,
      buttons: buttons,
    });
    await alert.present().then(() => {
      const firstInput: HTMLInputElement = document.querySelector('ion-alert input');
      if (firstInput) {
        firstInput.focus();
      }
    });
  }

  /**
   * @description Retorna AlertButton.
   * @returns AlertButton.
   */
  getCancelBtn(): any {
    return {
      text: 'CANCELAR',
      cssClass: ['alertButtonCenter'],
      role: 'cancel',
    };
  }

  /**
   * @description Retorna um AlertButton com ação.
   * @param handler Ação do botão.
   * @returns AlertButton.
   */
  getConfirmaBtn(handler: (data: any) => any): any {
    return {
      text: 'CONFIRMAR',
      cssClass: ['alertButtonFcGreen', 'alertButtonCenter'],
      handler,
    };
  }
}
