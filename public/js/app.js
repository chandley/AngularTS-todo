/**
 * Created by chrisha on 03/09/15.
 */
var ToDos;
(function (ToDos) {
    var deps = [
        "ui.router",
        "todos.root",
        "todos.main"
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
        function AddNewController() {
        }
        return AddNewController;
    })();
    ToDos.todosModule.controller("AddNewController", AddNewController);
})(ToDos || (ToDos = {}));

/// <reference path="module.ts" />
var ToDos;
(function (ToDos) {
    var ListController = (function () {
        function ListController(todoService, $window, $modal) {
            var _this = this;
            this.todoService = todoService;
            this.$window = $window;
            this.$modal = $modal;
            todoService.list()
                .then(function (todos) {
                _this.todos = todos;
            })
                .catch(function (response) {
                $window.console.log(response);
            });
        }
        ListController.prototype.addNew = function () {
            this.$modal.open({
                controller: "AddNewController",
                controllerAs: "addNewCtrl",
                templateUrl: "/todos/addnew.html",
                backdrop: "static" // prevents clickaway from closing
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
        return ToDoService;
    })();
    ToDos.ToDoService = ToDoService;
    ToDos.todosModule.service("todoService", ToDoService);
})(ToDos || (ToDos = {}));
