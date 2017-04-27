import {Component, Inject, OpaqueToken} from '@angular/core';
import {RouterOutletPromise} from './router-outlet-promise';

export const ROOT_OUTLET_LOADED = new OpaqueToken('ROOT_OUTLET_LOADED');

/**
 * Renders Angular 2's router outlet.  This component is rendered by the Angular
 * 1 router for any unmatched path.
 */
@Component({
  moduleId: module.id,
  selector: 'ng2-router-root',
  template: `<router-outlet></router-outlet>`,
})
export class Ng2RouterRoot {
  constructor(@Inject(ROOT_OUTLET_LOADED) loaded: RouterOutletPromise) {
    console.debug('Initializing ng2 router outlet');
    // Resolve the router outlet promise. This will result in the angular 2
    // router being initialized, if it hasn't been already.
    if (loaded.resolve) {
      loaded.resolve();
    }
  }
}


/**
 * Returns an object containing both a promise for the <router-outlet> element's
 * presence, as well as the resolution function passed to that promise.  This
 * can be used to trigger behavior (e.g. the ng2 router's initialization) once
 * that element is available in the DOM.
 */
export function routerOutletLoaded(): RouterOutletPromise {
  // This code creates an object consisting of both the promise itself, as well
  // as the resolution function passed to that promise.  We need this later so
  // that we can call "resolve".
  let resolve: Function|null = null;
  const done = new Promise<void>(r => resolve = r);
  const deferred = {done, resolve};
  console.log('returning', deferred);
  return deferred;
}