/**
 * Created by chrisha on 03/09/15.
 */

namespace ToDos {

    export var appModule = angular.module("todos", ["ui.router"]);

    appModule.config(
        ($stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

        $stateProvider
            .state({
                name: "root",
                url: "/",
                templateUrl: "root/root.html"
            })

    })

}
