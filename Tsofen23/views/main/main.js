/**
 * Created by Admin on 4/20/2015.
 */

clubItModuleVar.controller('MainController', function($scope,$state,$http,navbarService) {

    $scope.allStates = navbarService.allStates;
    $scope.allActivitys = navbarService.allActivitys;
    $scope.LogoClick = navbarService.LogoClick;
    $scope.photoSrc=navbarService.photoSrc;


    $scope.name='Main';
    navbarService.initState($scope.name);
    $scope.changeState = function(text)
    {
        $state.go(text);
    }
    $scope.openLogInDialog = function(){
        navbarService.openDialog();
    }

});

