/**
 * Created by Admin on 4/27/2015.
 */
clubItModuleVar.controller("ActivityController", function ($scope,$state,navbarService) {

    $scope.allStates = navbarService.allStates;
    $scope.allActivitys = navbarService.allActivitys;
    $scope.name='Activity';
    navbarService.initState($scope.name);
    $scope.changeState = function(text)
    {
        $state.go(text);
    }

});