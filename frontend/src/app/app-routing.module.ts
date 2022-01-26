import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {AddPostComponent} from './addPost/addPost.component';
import {ProductInfoComponent} from './productInfo/productInfo.component';
import {ProfileComponent} from "./profile/profile.component";
import {PreferencesAndDietComponent} from "./preferencesAndDiet/preferencesAndDiet.component";
import {BarcodeScannerComponent} from "./barcodeScanner/barcodeScanner.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profil', component: ProfileComponent},
  {path: 'ernaehrungsweise', component: PreferencesAndDietComponent},
  {path: 'beitraege', component: PostsComponent},
  {path: 'hinzufuegen', component: AddPostComponent},
  {path: 'produktinfo', component: ProductInfoComponent},
  {path: 'barcodescanner', component: BarcodeScannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
