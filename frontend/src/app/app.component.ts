import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bellIconConfig: NbIconConfig = { icon: 'bell-outline', pack: 'eva' };
}
