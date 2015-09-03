/**
 * Created by chrisha on 03/09/15.
 */
var ToDos;
(function (ToDos) {
    ToDos.appModule = angular.module("todos", ["ui.router"]);
    ToDos.appModule.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state({
            name: "root",
            url: "/",
            templateUrl: "root/root.html"
        });
    });
})(ToDos || (ToDos = {}));
