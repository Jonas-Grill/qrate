import { HinzufuegenComponent } from './../hinzufuegen/hinzufuegen.component';
import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import Quagga from '@ericblade/quagga2';
import {UpdateService} from './update.service';
import {environment} from "../../environments/environment";
import {getMainBarcodeScanningCamera} from './camera-access';
import {Router} from "@angular/router";

@Component({
  selector: 'app-barcodescanner',
  templateUrl: './barcodescanner.component.html',
  styleUrls: ['./barcodescanner.component.scss']
})
export class BarcodescannerComponent implements AfterViewInit {
  started: boolean | undefined;
  errorMessage: string | undefined;
  acceptAnyCode = true;

  //Kann eventuell wieder entfernt werden
  @ViewChild('hinzufuegenComponent', { static: false })
  hinzufuegenComponent!: HinzufuegenComponent;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private updateService: UpdateService,
              private router: Router) {
  }

  ngAfterViewInit(): void {
    if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
      this.errorMessage = 'getUserMedia is not supported';
      return;
    }

    this.initializeScanner();

    if (environment.production) {
      setTimeout(() => {
        this.updateService.checkForUpdates();
      }, 10000);
    }
  }

  private initializeScanner(): Promise<void> {
    if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
      this.errorMessage = 'getUserMedia is not supported. Please use Chrome on Android or Safari on iOS';
      this.started = false;
      return Promise.reject(this.errorMessage);
    }

    // enumerate devices and do some heuristics to find a suitable first camera
    return Quagga.CameraAccess.enumerateVideoDevices()
      .then(mediaDeviceInfos => {
        const mainCamera = getMainBarcodeScanningCamera(mediaDeviceInfos);
        if (mainCamera) {
          //console.log(`Using ${mainCamera.label} (${mainCamera.deviceId}) as initial camera`);
          return this.initializeScannerWithDevice(mainCamera.deviceId);
        } else {
          //console.error(`Unable to determine suitable camera, will fall back to default handling`);
          return this.initializeScannerWithDevice(undefined);
        }
      })
      .catch(error => {
        this.errorMessage = `Failed to enumerate devices: ${error}`;
        this.started = false;
      });
  }

  private initializeScannerWithDevice(preferredDeviceId: string | undefined): Promise<void> {
    //console.log(`Initializing Quagga scanner...`);

    const constraints: MediaTrackConstraints = {};
    if (preferredDeviceId) {
      // if we have a specific device, we select that
      constraints.deviceId = preferredDeviceId;
    } else {
      // otherwise we tell the browser we want a camera facing backwards (note that browser does not always care about this)
      constraints.facingMode = 'environment';
    }

    return Quagga.init({
        inputStream: {
          type: 'LiveStream',
          constraints,
          area: { // defines rectangle of the detection/localization area
            top: '25%',    // top offset
            right: '10%',  // right offset
            left: '10%',   // left offset
            bottom: '25%'  // bottom offset
          },
          target: document.querySelector('#scanner-container') ?? undefined
        },
        decoder: {
          readers: ['ean_reader'],
          multiple: false
        },
        locate: false
      },
      (err) => {
        if (err) {
          this.errorMessage = `Initialization error: ${err}`;
          this.started = false;
        } else {
          Quagga.start();
          this.started = true;
          this.changeDetectorRef.detectChanges();
          Quagga.onDetected((res) => {
            if (res.codeResult.code) {
              this.onBarcodeScanned(res.codeResult.code);
            }
          });
        }
      });
  }

  onBarcodeScanned(code: string) {
    Quagga.stop();
    sessionStorage.setItem('barcode', code);
    this.hinzufuegenComponent.isScaned(); //Kann eventuell wieder entfernt werden
    this.router.navigate(['/','produktinfo']);
  }
}
