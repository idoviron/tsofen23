/**
 * Created by Admin on 5/3/2015.
 */

clubItModuleVar.controller("ParentController",function($scope,
                                                       $state,$modal,navbarService){
    $scope.init = function(){
        $scope.allStates = navbarService.allStates;
        $scope.allActivitys = navbarService.allActivitys;
        $scope.HeaderImage=navbarService.HeaderImage;
        $scope.photoSrc=navbarService.photoSrc;
        $scope.name=navbarService.name;
        navbarService.initState($scope.name);
    };
    $scope.init();
    //$scope.photoSrc;
    //$scope.HeaderImage=
    //    'http://www.partysantodomingo.com/img/upload/1353/' +
    //    'Party%20Santo%20Domingo%2075.jpg';
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
                $scope.photoSrc=returnValue;
                navbarService.photoSrc=returnValue;
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
                navbarService.HeaderImage=returnValue;
                console.log($scope.HeaderImage);
            },
            function(){

            }
        );

    }

});

