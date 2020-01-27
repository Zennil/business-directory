import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearComponent } from './crear/crear.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MyGuardian } from './services/my-guardian.service';


const routes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:idLugar', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear/:idLugar', component: CrearComponent, canActivate: [MyGuardian] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  { path: '**', redirectTo: 'lugares' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
