/**
 * Created by chrisha on 03/09/15.
 */
var ToDos;
(function (ToDos) {
    var deps = [
        "ui.router",
        "todos.root"
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
