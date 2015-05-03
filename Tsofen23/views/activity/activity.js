/**
 * Created by Admin on 4/27/2015.
 */
clubItModuleVar.controller("ActivityController", function ($scope,$state,navbarService,$controller) {
    $controller('ParentController',{$scope : $scope});


    $scope.changeState = function(theState, theName){
        if (theState == 'activity') {
            $scope.name = theName;
            navbarService.initState($scope.name);
        }
        else {
            navbarService.name = theName;
            $state.go(theState);
        }
    };


    $scope.watch($scope.photoSrc, function () {
        
    });
    

});