'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('verifApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
