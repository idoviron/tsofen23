/**
 * Created by Admin on 5/3/2015.
 */

clubItModuleVar.controller("ParentController",function($scope,
                                                       $state,$modal,navbarService){
    $scope.init = function(){
        $scope.allStates = navbarService.allStates;
        $scope.allActivitys = navbarService.allActivitys;
        $scope.LogoClick = navbarService.LogoClick;
        $scope.name=navbarService.name;
        navbarService.initState($scope.name);
    };
    $scope.init();
    $scope.photoSrc;
    $scope.HeaderImage;
    $scope.changeState = function(theState, theName){
        navbarService.name = theName;
        $state.go(theState);
    };
    $scope.openLogInDialog = function(){
        navbarService.openDialog();
    };

    // This function creates new activity
    $scope.createActivity = function() {
        // Create state for navbar
        var st = new RState("FOOTBALL" + $scope.number, "activity", "");
        // Add activity to navbar array
        navbarService.allStates.push(st);
        // Create again the navbar
        navbarService.initState($scope.name);

        var act = new Activity("FOOTBALL",
            st, "hi!!!", "assets/Penguins.jpg");

        navbarService.allActivities.push(act);

    }
    $scope.LogoClick = function () {
        var modalInstance= $modal.open({
            templateUrl: 'modals/uploadPhoto/uploadPhoto.html',
            controller: 'UploadModalController',
            size: 'sm' //'lg'

        });

        modalInstance.result.then(
            function(returnValue){
                //$scope.resultFromDialog2=returnValue;
                $scope.photoSrc=returnValue;
                console.log($scope.photoSrc);
            },
            function(){

            }
        );
    };
    $scope.CallFunc = function() {
        var modalInstance= $modal.open({
            templateUrl: 'modals/uploadPhoto/uploadPhoto.html',
            controller: 'UploadModalController',
            size: 'sm' //'lg'

        });

        modalInstance.result.then(
            function(returnValue){
                //$scope.resultFromDialog2=returnValue;
                $scope.HeaderImage=returnValue;
                console.log($scope.HeaderImage);
            },
            function(){

            }
        );

    }

});

