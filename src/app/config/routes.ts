import { HomeComponent } from "../modules/contact";
import { RaceComponent } from "../modules/race";
import { FavoriteComponent } from "../modules/favorites";
import { DetailComponent } from "../modules/detail";
import { NotFoundComponent } from "../modules/notfound";
import { AlbumComponent } from "../modules/album";
import { AnnotationComponent } from "../modules/annotation";



import { EditComponent } from "../modules/edit/edit.component";
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'race', component: RaceComponent},
  { path: 'favorites', component: FavoriteComponent },
  { path: 'notfound', component: NotFoundComponent },
  {
      path: 'detail/:id',
      component: DetailComponent,
      children: [{
          path: '',
          component: AnnotationComponent
      }, {
          path: 'album',
          component: AlbumComponent
      }, {
          path: 'annotation',
          component: AnnotationComponent,
          outlet: "aux"
      }, {
        path: 'album',
        component: AlbumComponent,
        outlet: "aux"
      }]
  },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: EditComponent },
  { path: '**', component: NotFoundComponent },
  {
    path: "",
    redirectTo: "notfound",
    pathMatch: "full"
  },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];
export default appRoutes;