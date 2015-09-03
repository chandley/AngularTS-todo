describe("AddNewController", function() {
    beforeEach(module("todos"));
    var controller, httpBackend, modalInstance;
    modalInstance = {};
    modalInstance.close = function() {
        modalInstance.closed = true;
    };
    beforeEach(inject(function($controller, $httpBackend) {
        controller = $controller("AddNewController",
            {$modalInstance: modalInstance});
        httpBackend = $httpBackend;
        httpBackend.expectPOST("/api/todos", function (data) {
            data = JSON.parse(data);
            return (data.text === "Foo"
            && typeof data.id !== "undefined"
            && typeof data.created !== "undefined");
        })
            .respond(201, '');
    }));
    it("should POST to '/api/todos' on save", function() {
        controller.text = "Foo";
        controller.save();
        httpBackend.flush();
    });
    it("should close after saving", function() {
        controller.text = "Foo";
        controller.save();
        httpBackend.flush();
        expect(modalInstance.closed).toBeTruthy();
    });
});

