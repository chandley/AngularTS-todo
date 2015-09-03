/**
 * Created by chrisha on 03/09/15.
 */

namespace ToDos {

    export type ModalService = angular.ui.bootstrap.IModalService;

    var deps = [
        "ui.router",
        "todos.root",
        "todos.main"
    ]
    export var appModule = angular.module("todos", deps);

    appModule.config(
        ($stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

        $stateProvider
            .state({
                name: "root",
                url: "/",
                templateUrl: "root/root.html",
                controller: "RootController",
                controllerAs: "rootCtrl"
            })

            $urlRouterProvider.otherwise("/");

    })

}
