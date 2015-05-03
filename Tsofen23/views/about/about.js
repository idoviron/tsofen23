/**
 * Created by Admin on 4/26/2015.
 */

clubItModuleVar.controller("AboutController", function ($scope,$state,navbarService,$controller) {
    $controller('ParentController',{$scope : $scope});
    //$scope.init();


    console.log(navbarService.userName);
    $scope.userName = "";
    $scope.$watch('userName',function(){
        $scope.userName = navbarService.userName;

    });
    console.log( $scope.userName);
});
