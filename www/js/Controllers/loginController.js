"use strict";

app.controller('LoginController', function ($scope, $state, AuthFactory) {

    $scope.loginFacebook = function () {
        AuthFactory.login()
                .then(function (result) {
                    console.log('COnnexion reussie');
                    console.log(result.user);
                    $state.go('app.films');
                }).catch(function (error) {
            console.log('Erreur lors de la connexion');
            console.log(error);
        });
    };
    
    $scope.logoutFacebook = function() {
        AuthFactory.logout()
                .then(function() {
                    console.log('Deconnexion réussie');
            $state.go('login');
        }, function() {
            console.log('Erreur lors de la déconnexion');
        });
    };
});