/**
 * Created by Admin on 4/26/2015.
 */

clubItModuleVar.controller("ContactsController", function ($scope,$state,navbarService) {

    $scope.allStates = navbarService.allStates;
    $scope.allActivitys = navbarService.allActivitys;
    $scope.name='Contacts';
    navbarService.initState($scope.name);
    $scope.changeState = function(text)
    {
        $state.go(text);
    }

});

