/**
 * Created by chrisha on 03/09/15.
 */
var ToDos;
(function (ToDos) {
    var deps = [
        "ui.router",
        "todos.root",
        "todos.main",
        "todos.filters"
    ];
    ToDos.appModule = angular.module("todos", deps);
    ToDos.appModule.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state({
            name: "root",
            url: "/",
            templateUrl: "root/root.html",
            controller: "RootController",
            controllerAs: "rootCtrl"
        });
        $urlRouterProvider.otherwise("/");
    });
})(ToDos || (ToDos = {}));

var ToDos;
(function (ToDos) {
    ToDos.filterModule = angular.module("todos.filters", []);
})(ToDos || (ToDos = {}));

/// <reference path="module.ts" />
var ToDos;
(function (ToDos) {
    function momentFilter(val) {
        if (typeof val !== "string")
            return val;
        var m = moment(val);
        if (!m.isValid())
            return val;
        return m.format("DD MM YYYY");
    }
    ToDos.filterModule.filter("moment", function () { return momentFilter; });
})(ToDos || (ToDos = {}));

/**
 * Created by chrisha on 03/09/15.
 */
var ToDos;
(function (ToDos) {
    ToDos.rootModule = angular.module("todos.root", []);
})(ToDos || (ToDos = {}));

/**
 * Created by chrisha on 03/09/15.
 */
/// <reference path="module.ts" />
var ToDos;
(function (ToDos) {
    var RootController = (function () {
        function RootController() {
            this.messages = [
                "Welcome",
                "New version is out"
            ];
            this.showMessages = true;
        }
        RootController.prototype.toggleMessages = function () {
            this.showMessages = !this.showMessages;
        };
        return RootController;
    })();
    ToDos.rootModule.controller("RootController", RootController);
})(ToDos || (ToDos = {}));

/**
 * Created by chrisha on 03/09/15.
 */
var ToDos;
(function (ToDos) {
    var deps = [
        "ui.router",
        "ui.bootstrap"
    ];
    ToDos.todosModule = angular.module("todos.main", deps);
    ToDos.todosModule.config(function ($stateProvider) {
        $stateProvider.state({
            name: "root.todos",
            url: "todos",
            templateUrl: "/todos/list.html",
            controller: "ListController",
            controllerAs: "listCtrl"
        });
    });
})(ToDos || (ToDos = {}));

/// <reference path="module.ts" />
var ToDos;
(function (ToDos) {
    var AddNewController = (function () {
        function AddNewController(todoService, $modalInstance) {
            this.todoService = todoService;
            this.$modalInstance = $modalInstance;
        }
        AddNewController.prototype.save = function () {
            var _this = this;
            var todo = {
                id: Date.now().toString(),
                text: this.text,
                created: moment().toISOString()
            };
            this.todoService.add(todo)
                .then(function () {
                _this.$modalInstance.close();
            });
        };
        return AddNewController;
    })();
    ToDos.todosModule.controller("AddNewController", AddNewController);
})(ToDos || (ToDos = {}));

/// <reference path="module.ts" />
var ToDos;
(function (ToDos) {
    var ListController = (function () {
        function ListController(todoService, $window, $modal) {
            this.todoService = todoService;
            this.$window = $window;
            this.$modal = $modal;
            this.load();
        }
        ListController.prototype.load = function () {
            var _this = this;
            this.todoService.list()
                .then(function (todos) {
                _this.todos = todos;
            })
                .catch(function (response) {
                _this.$window.console.log(response);
            });
        };
        ListController.prototype.addNew = function () {
            var _this = this;
            this.$modal.open({
                controller: "AddNewController",
                controllerAs: "addNewCtrl",
                templateUrl: "/todos/addnew.html",
                backdrop: "static" // prevents clickaway from closing
            }).result.then(function () {
                _this.load();
            });
        };
        return ListController;
    })();
    ToDos.todosModule.controller("ListController", ListController);
})(ToDos || (ToDos = {}));

///reference path="module.ts" />
var ToDos;
(function (ToDos) {
    var ToDoService = (function () {
        function ToDoService($http) {
            this.$http = $http;
        }
        ToDoService.prototype.list = function () {
            return this.$http.get("/api/todos").
                then(function (response) {
                return response.data;
            });
        };
        ToDoService.prototype.add = function (todo) {
            return this.$http.post("/api/todos", todo)
                .then(function (response) { return response.data; });
        };
        return ToDoService;
    })();
    ToDos.ToDoService = ToDoService;
    ToDos.todosModule.service("todoService", ToDoService);
})(ToDos || (ToDos = {}));
