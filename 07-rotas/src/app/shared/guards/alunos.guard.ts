import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild {
  constructor() {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log('AlunosGuardChild');

    if (state.url.includes('editar')) {
      // alert('Usuário sem acesso');
      // return false;
    }

    return true;
  }
}
