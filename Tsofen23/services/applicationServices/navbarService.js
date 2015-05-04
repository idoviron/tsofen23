/**
 * Created by Admin on 4/26/2015.
 */
clubItModuleVar.service('navbarService', function () {


    this.name="דף ראשי";
    this.photoSrc='http://noodlebuck.com/uploadedimages/f13b58fd-' +
    '1228-46b1-9319-5dff45747a96-ServicePic.jpg';
    this.HeaderImage=
        'http://www.partysantodomingo.com/img/upload/1353/' +
        'Party%20Santo%20Domingo%2075.jpg';
    this.allStates = [
        new RState('אנשי קשר','contacts',''),
        new RState('מידע נוסף','about',''),
        new RState('דף ראשי','main','active')
        //new RState('New','new','')
    ];

    this.allActivities = [];
    this.userName="gg";
    this.userPassword="";
    this.initState = function (theName) {
        for(var st in this.allStates)
        {
            if(this.allStates[st].theName==theName)
            {
                this.allStates[st].isActive='active';
            }
            else
                this.allStates[st].isActive ="";
        }
    };
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
    };

});


