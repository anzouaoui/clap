"use strict";

app.factory('AuthFactory', function($firebaseAuth) {
    
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.addScope('user_location');
    provider.addScope('email');
    provider.addScope('user_photos');
    provider.addScope('public_profile');
    provider.addScope('user_about_me');
    
    var Auth = {
        login: function() {
            return $firebaseAuth().$signInWithPopup(provider);
        },
        logout: function() {
            return $firebaseAuth().$signOut();
        }
    };
    return Auth;
})