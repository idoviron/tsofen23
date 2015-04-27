/**
 * Created by me on 26/04/2015.
 */
clubItModuleVar.factory('parseClassFactory', ['$http','globalParseConfiguration', function($http) {


    $httpProvider.defaults.headers.get = {
        'X-Parse-Application-Id': globalParseConfiguration.applicationId,
        'X-Parse-REST-API-Key': globalParseConfiguration.restApiId
    };
    $httpProvider.defaults.headers.post = {
        'X-Parse-Application-Id': globalParseConfiguration.applicationId,
        'X-Parse-REST-API-Key': globalParseConfiguration.restApiId
    };
    $httpProvider.defaults.headers.put = {
        'X-Parse-Application-Id': globalParseConfiguration.applicationId,
        'X-Parse-REST-API-Key': globalParseConfiguration.restApiId
    };
    $httpProvider.defaults.headers.delete = {
        'X-Parse-Application-Id': globalParseConfiguration.applicationId,
        'X-Parse-REST-API-Key': globalParseConfiguration.restApiId
    };
    /*
    * this function will add/update a single object to the class 'tableName'
    * the inputObject is a JSON object
    * successUserCB - is the callback that the user want to run in case of success
    * errorUserCB -  is the callback that the user want to run in case of error
    */
    this.createObject = function(tableName,inputObject,successUserCB,errorUserCB) {

        $http({
            method: 'POST',
            //url: 'https://api.parse.com/1/classes/Tshirts',
            url: 'https://api.parse.com/1/classes/'+tableName,
          /*  headers: {
                'X-Parse-Application-Id': globalParseConfiguration.applicationId,
                'X-Parse-REST-API-Key': globalParseConfiguration.restApiId
            },*/
            //data: shirt
            data: inputObject
        })
            .success(function(data, success) {
                console.log(data);
                if(successUserCB)
                    successUserCB(data);

            })
            .error(function(data, status) {
                alert("Error" + status);
                if(errorUserCB)
                    errorUserCB(data,status);

            });


    };//end of createUpdateClass
    /*
     * this function will delete a single object to the class 'tableName'
     * the cbjectId is a object parse Id
     * successUserCB - is the callback that the user want to run in case of success
     * errorUserCB -  is the callback that the user want to run in case of error
     */
    this.deleteObjFromClass = function(tableName,objectId,successUserCB,errorUserCB) {

        $http({
            method: 'DELETE',
            url: 'https://api.parse.com/1/classes/'+tableName+'/'+objectId/*,
            headers: {
                'X-Parse-Application-Id': globalParseConfiguration.applicationId,
                'X-Parse-REST-API-Key': globalParseConfiguration.restApiId
            }*/
            //data: shirt
           // data: inputObject
        })
            .success(function(data, success) {
                console.log(data);
                if(successUserCB)
                    successUserCB(data);

            })
            .error(function(data, status) {
                alert("Error" + status);
                if(errorUserCB)
                    errorUserCB(data);
            });


    };//end of deleteObjFromClass
    /*
     * this function will retr a single object to the class 'tableName'
     * the cbjectId is a object parse Id
     * successUserCB - is the callback that the user want to run in case of success
     * errorUserCB -  is the callback that the user want to run in case of error
     */
    this.getObject = function(tableName,objectId,successUserCB,errorUserCB) {

        $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/'+tableName+'/'+objectId/* ,
           headers: {
                'X-Parse-Application-Id': 'pG1HcQy1azaAa9FdGGf8k6rSdZ8vi5Sf0UlBwq0F',
                'X-Parse-REST-API-Key': 'CdRUgNtnc9cwJg7Ww8zOBb6pmDzLfLM5jhL3FISD'
            }*/
        })
            .success(function(data, success) {
                if(successUserCB)
                    successUserCB(data);

            })
            .error(function(data, status) {
                alert("Error" + status);
                if(errorUserCB)
                    errorUserCB(data);
            });
    }


}]);