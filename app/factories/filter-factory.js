'use strict';


// Filter factory creates an object with a property of searchTerm set to an empty string: RETURNS AN OBJECT WITH A SINGLE PROPERTY ON IT CALLED SEARCHTERM
todoApp.factory('FilterFactory', function() {
  return {
    searchTerm: ""
  };
});
