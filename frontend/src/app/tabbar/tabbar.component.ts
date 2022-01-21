import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent {
}
