/**
 * Created by Admin on 4/26/2015.
 */

clubItModuleVar.controller("AboutController", function ($scope,$state,navbarService) {

    $scope.allStates = navbarService.allStates;
    $scope.allActivitys = navbarService.allActivitys;
    $scope.name='About';
    navbarService.initState($scope.name);
    $scope.changeState = function(text)
    {
        $state.go(text);
    }

});