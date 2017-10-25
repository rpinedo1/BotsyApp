(function () {
  'use strict';

  angular
    .module('artists')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Artists',
      state: 'artists',
      type: 'dropdown',
      roles: ['artist']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'artists', {
      title: 'List Artists',
      state: 'artists.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'artists', {
      title: 'Create Artist',
      state: 'artists.create',
      roles: ['admin']
    });
  }
}());
