/**
 * Created by Admin on 4/26/2015.
 */

clubItModuleVar.service('navbarService', function () {
    this.allStates = [
        new RState('דף ראשי','main','active'),
        new RState('מידע נוסף','about',''),
        new RState('אנשי קשר','contacts','')


        //new RState('New','new','')
    ];

    this.allActivitys = [new RState('פעיליות','activity',''),new RState('2פעיליות','activity2','')];

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


