describe("ListController", function() {
    beforeEach(module("todos"));
    describe("on the Happy Path", function() {
        var controller, httpBackend;
        beforeEach(inject(function($controller, $httpBackend) {
            controller = $controller("ListController");
            $httpBackend.expectGET("/api/todos")
                .respond([{id: 42}]);
            httpBackend = $httpBackend;
        }));
        it("should GET '/api/todos'", function() {
            httpBackend.flush();
        });
        it("should put the ToDos in the 'todos' property", function() {
            httpBackend.flush();
            expect(controller.todos).toBeDefined();
            expect(controller.todos.length).toEqual(1);
        });
    });
    describe("on the Sad Path", function() {
        var controller, httpBackend, mockWindow;
        beforeEach(inject(function($controller, $httpBackend) {
            mockWindow = {console: {}};
            mockWindow.console.log = function(x) {
                mockWindow.console.logCalled = true;
            };
            controller = $controller("ListController", {$window: mockWindow});
            $httpBackend.expectGET("/api/todos")
                .respond(500, '');
            httpBackend = $httpBackend;
        }));
        it("should log errors", function() {
            httpBackend.flush();
            expect(mockWindow.console.logCalled).toBeTruthy();
        });
    })
});
