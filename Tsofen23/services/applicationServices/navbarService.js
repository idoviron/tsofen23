/**
 * Created by Admin on 4/26/2015.
 */

clubItModuleVar.service('navbarService', function ($modal) {


    this.photoSrc="";

    this.allStates = [
        new RState('אנשי קשר','contacts',''),
        new RState('דף ראשי','main','active'),
        new RState('מידע נוסף','about','')
        //new RState('New','new','')
    ];

    this.allActivitys = [new RState('פעיליות','activity',''),new RState('2פעיליות','activity2','')];
    this.userName="gg";
    this.userPassword="";
    this.initState = function (theName) {
        for(st in this.allStates)
        {
            if(this.allStates[st].theName==theName)
            {
                this.allStates[st].isActive='active';
            }
            else
                this.allStates[st].isActive ="";
        }
    }



    this.openDialog = function(){
        var modalInstance =
            $modal.open({
                templateUrl:'modals/logInModal/logInModal.html',
                controller :'LogInModalController',
                size : 'lg'
            });
        modalInstance.result.then(
            function(returnValue){
                this.userName = returnValue.userInput;
                this.userPassword = returnValue.passwordInput;

            },
            function(){

            }
        );
    }
    
    this.LogoClick = function () {
        var modalInstance= $modal.open({
            templateUrl: 'modals/uploadPhoto/uploadPhoto.html',
            controller: 'UploadModalController',
            size: 'sm' //'lg'

        });

        modalInstance.result.then(
            function(returnValue){
                //$scope.resultFromDialog2=returnValue;
                this.photoSrc=returnValue;
            },
            function(){

            }
        );
    }
    
});


