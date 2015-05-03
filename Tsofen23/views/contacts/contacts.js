/**
 * Created by Admin on 4/26/2015.
 */

clubItModuleVar.controller("ContactsController", function ($scope,$state,navbarService,$controller) {
    $controller('ParentController',{$scope : $scope});
    //$scope.name="אנשי קשר";
    //$scope.init();


    //$scope.name=navbarService.name;
    //navbarService.initState($scope.name);
    //$scope.changeState = function(text)
    //{
    //    $state.go(text);
    //}
    //$scope.openLogInDialog = function(){
    //    navbarService.openDialog();
    //}

});

