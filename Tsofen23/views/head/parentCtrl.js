/**
 * Created by Admin on 5/3/2015.
 */

clubItModuleVar.controller("ParentController",function($scope,
                                                       $state,navbarService){
    $scope.init = function(){
        $scope.allStates = navbarService.allStates;
        $scope.allActivitys = navbarService.allActivitys;
        $scope.LogoClick = navbarService.LogoClick;
        $scope.photoSrc=navbarService.photoSrc;
        $scope.name=navbarService.name;
        navbarService.initState($scope.name);
    };
    $scope.init();

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


});

