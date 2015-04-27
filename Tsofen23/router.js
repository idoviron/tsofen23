/**
 * Created by Admin on 4/20/2015.
 */

clubItModuleVar.config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state(
        'main',
        {
            controller:'MainController',
            templateUrl:'views/main/main.html',
            url:'/main'
        }
    )
        .state(
        'contacts',
        {
            controller:'ContactsController',
            templateUrl:'views/contacts/contacts.html',
            url:'/contacts'
        }
    )
        .state(
        'about',
        {
            controller:'AboutController',
            templateUrl:'views/about/about.html',
            url:'/about'
        })
        .state(
        'activity',
        {
        controller:'ActivityController',
            templateUrl:'views/activity/activity.html',
            url:'/activity'
        });


});


