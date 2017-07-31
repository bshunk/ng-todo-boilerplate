'use strict';
                                                          // 'da heck is this?
todoApp.controller("NavController", function($scope, $window, FilterFactory, UserFactory) {

  $scope.searchText = FilterFactory; // { searchTerm = "" } IS WHAT FILTER FACTORY EQUALS
  $scope.isLoggedIn = false;

  // Listen for changes to auth state; If logged in, change isLoggedIn to true so
  // the search input, add btn, and "logout" shows
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $scope.isLoggedIn = true;
      console.log("currentUser logged in?", user.uid);
      console.log("logged in t-f", $scope.isLoggedIn );
      // $apply tells angular to apply whatever change to scope is needed on it's own manually
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      // $apply tells angular to apply whatever change to scope is needed on it's own manually
      $scope.$apply();
      console.log("user logged in?", $scope.isLoggedIn);
      $window.location.href = "#!/login";
    }
  });

  $scope.logout = () => {
    console.log("logout clicked");
    UserFactory.logoutUser();
  };

});
