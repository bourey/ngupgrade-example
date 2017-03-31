import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setUpLocationSync } from '@angular/router/upgrade';

import { AppModule } from './app2.module';
import { footballApp } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  const upgrade = (<any>ref.instance).upgrade;
  // bootstrap angular1
  upgrade.bootstrap(document.body, [footballApp.name]);
  setUpLocationSync(upgrade);
});
