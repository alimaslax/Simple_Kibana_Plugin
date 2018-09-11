import { uiModules } from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import template from './templates/index.html';
import { helloController } from './helloController';


uiRoutes.enable();
uiRoutes
.when('/', {
  template: template,
  controller: 'helloController'
});

uiModules
.get('app/hello', [])
.controller('helloController', helloController);
