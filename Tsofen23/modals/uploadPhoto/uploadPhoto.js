/**
 * Created by Admin on 4/30/2015.
 */

clubItModuleVar.controller('UploadModalController', function ($scope,$modalInstance) {
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
    $scope.ok = function () {
        //console.log($scope.resultFromDialog2);
        $modalInstance.close();
    }
});