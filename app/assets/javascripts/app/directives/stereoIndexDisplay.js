function stereosIndexDisplay () {
  return {
    scope: { stereo: "="},
    replace: true,
    templateUrl: 'app/views/directive_templates/stereosIndexDisplay.html',
    controller: function($scope) {
  
    }
  }
}

angular
  .module('app')
  .directive('stereosIndexDisplay', stereosIndexDisplay);
