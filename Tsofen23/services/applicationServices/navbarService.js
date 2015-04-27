/**
 * Created by Admin on 4/26/2015.
 */

clubItModuleVar.service('navbarService', function () {
    this.allStates = [
        new RState('Main','main','active'),
        new RState('About','about',''),
        new RState('Contacts','contacts','')


        //new RState('New','new','')
    ];

    this.allActivitys = [new RState('Activity','activity','')];

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
});


