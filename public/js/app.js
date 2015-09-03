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
        }
        return RootController;
    })();
    ToDos.rootModule.controller("RootController", RootController);
})(ToDos || (ToDos = {}));

/**
 * Created by chrisha on 03/09/15.
 */
var ToDos;
(function (ToDos) {
    ToDos.todosModule = angular.module("todos.main", []);
})(ToDos || (ToDos = {}));

/// <reference path="module.ts" />
var ToDos;
(function (ToDos) {
    var ListController = (function () {
        function ListController($http) {
            var _this = this;
            this.$http = $http;
            $http.get("/api/todos")
                .then(function (response) {
                _this.todos = response.data;
            });
        }
        return ListController;
    })();
    ToDos.todosModule.controller("ListController", ListController);
})(ToDos || (ToDos = {}));
