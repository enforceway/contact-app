import { AppComponent } from "../app.component";
import { HomeComponent } from "../modules/contact";
import { DetailComponent } from "../modules/detail";
import { RaceComponent } from "../modules/race/race.component";
import { FavoriteComponent } from "../modules/favorites";
import { NotFoundComponent } from "../modules/notfound/notfound.page";
import { FooterComponent } from "../modules/footer/footer.component";
import { HeaderComponent } from "../modules/header/header.component";
import { ContactItemComponent } from "../modules/contact/contact.item";
import { EditComponent } from "../modules/edit";
import { PhonePipe } from "../pipes/phone.pipe";

export default [
    PhonePipe,
    AppComponent,
    HomeComponent,
    RaceComponent,
    NotFoundComponent,
    DetailComponent,
    FavoriteComponent,
    FooterComponent,
    HeaderComponent,
    ContactItemComponent,
    EditComponent
]