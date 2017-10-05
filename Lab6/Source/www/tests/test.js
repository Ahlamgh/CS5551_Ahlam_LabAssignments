describe('lab6', function() {
    var $httpBackend, $rootScope, createController, authRequestHandler, scope;
  
    // Set up the module
    beforeEach(module('starter'));
    beforeEach(inject(function($injector) {
      // Set up the mock http service responses
      $httpBackend = $injector.get('$httpBackend');
      // backend definition common for all tests

      // Get hold of a scope (i.e. the root scope)
      $rootScope = $injector.get('$rootScope');
      // The $controller service is used to create instances of controllers
      var $controller = $injector.get('$controller');
  
      scope = $rootScope.$new();
      $controller('lab6', {$scope: scope});
    }));
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    it("Does it get the image link?", function() {
        var mock = {"data":{"items":[{"link":"testlink"}]}}
        var link = scope.image_link(mock);
        expect(link).toEqual("testlink");
    });
    it("Does it generate api request for google search?", function() {
        var mock = "cats"
        var expectedOut = "https://www.googleapis.com/customsearch/v1?key=AIzaSyB-6RanYIAXIewbbHswj6R8O2XjTfOOEdc&q="+
        mock+"&searchType=image&cx=009906912528973601220:yf8cj1tfpcq"
        var url = scope.google_api_url(mock);
        expect(url).toEqual(expectedOut);
    });
});