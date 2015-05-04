/**
 * Created by Admin on 4/30/2015.
 */

clubItModuleVar.controller('UploadModalController', function ($scope,$http,$modalInstance) {
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.ok = function () {
        console.log($scope.imageName);
        $modalInstance.close($scope.imageName);
    };
    $scope.uploadFile = function(files) {
        $http.post("https://api.parse.com/1/files/image.jpg", files[0], {
            withCredentials: false,
            headers: {
                'X-Parse-Application-Id': 'GP1iAm5KC8hYfOmRNNQX72ylfQj4VuvB5sdyyEug',
                'X-Parse-REST-API-Key': 'z2EDgy2zX8YR3IbfgUhP3HnBU4JvzoyLY8XTJGBp',
                'Content-Type': 'image/jpeg'
            },
            transformRequest: angular.identity
        }).then(function(data)
            {
                console.log(data);
                $http({
                method : 'POST',
                url : 'https://api.parse.com/1/classes/Files',
                headers: {
                    'X-Parse-Application-Id': 'GP1iAm5KC8hYfOmRNNQX72ylfQj4VuvB5sdyyEug',
                    'X-Parse-REST-API-Key': 'z2EDgy2zX8YR3IbfgUhP3HnBU4JvzoyLY8XTJGBp'
                },
                data: {
                    model: 'Hadi',
                    picture: {
                        "name": data.data.name,
                        "__type": "File"

                    }
                }
            })
                .success(function (data, status) {
                    console.log(data);
                })
                .error(function (data, status) {
                    alert('ERROR' + status);
                });

                console.log(data.data.url);
                $scope.imageName= data.data.url;
            }
        );
    };
});