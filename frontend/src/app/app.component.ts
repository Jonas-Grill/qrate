import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NbIconConfig} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  title = 'qrate';
  bellIconConfig: NbIconConfig = {icon: 'bell-outline', pack: 'eva'};
}
