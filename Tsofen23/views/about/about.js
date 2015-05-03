/**
 * Created by Admin on 4/26/2015.
 */

clubItModuleVar.controller("AboutController", function ($scope,$state,navbarService) {

    $scope.allStates = navbarService.allStates;
    $scope.allActivitys = navbarService.allActivitys;
    $scope.LogoClick = navbarService.LogoClick;
    $scope.photoSrc=navbarService.photoSrc;

    $scope.name='About';
    navbarService.initState($scope.name);
    $scope.changeState = function(text)
    {
        $state.go(text);
    }

    $scope.openLogInDialog = function(){
        navbarService.openDialog();
    }

    console.log(navbarService.userName);
    $scope.userName = "";
    $scope.$watch('userName',function(){
        $scope.userName = navbarService.userName;

    });
    console.log( $scope.userName);
});
