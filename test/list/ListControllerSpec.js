describe("ListController", function() {

    beforeEach(module("todos"));

    var controller, httpBackend;

    beforeEach(inject(function($controller, $httpBackend) {

        controller = $controller("ListController");

        $httpBackend.expectGET("/api/todos")
            .respond([{id: 42}]);

        httpBackend = $httpBackend

    }));

    it("should GET '/api/todos'", function () {

        httpBackend.flush();

    });

    it("should put the ToDos into the 'todos' property", function() {
        httpBackend.flush();
        expect(controller.todos).toBeDefined();
        expect(controller.todos.length).toEqual(1);
    })

});