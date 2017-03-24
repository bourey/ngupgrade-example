import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app2.module';
import { ROOT_OUTLET_LOADED } from './router-root.component';
import { footballApp } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    let upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, [footballApp.name]);

    // Once the root outlet is available in the DOM, kick off the ng2
    // router. This promise will only be resolved once, which ensures that
    // we don't call initalNavigation multiple times.
    ref.injector.get(ROOT_OUTLET_LOADED).done.then(() => {
      const router = ref.injector.get(Router);
      // Kick off ng2 routing.
      console.debug('Intializaing ng2 router');
      router.initialNavigation();
    });
    return upgrade;
});
