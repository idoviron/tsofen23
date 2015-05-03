/**
 * Created by Admin on 4/30/2015.
 */
clubItModuleVar.controller('LogInModalController',function($scope,$modalInstance){

    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    }


    $scope.ok = function(){
        $modalInstance.close({

            userInput :$scope.userInput,
            passwordInput:$scope.passwordInput

            });
    }


});
