import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { FormDeactivate } from '../interfaces/form-deactivate';

@Injectable()
export class AlunosDeactiveGuard implements CanDeactivate<FormDeactivate> {
  canDeactivate(
    component: FormDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log('Guarda de desativação');
    return component.podeDesativar();
  }
}
