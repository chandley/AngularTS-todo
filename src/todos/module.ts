/**
 * Created by chrisha on 03/09/15.
 */

namespace ToDos {

    var deps = [
        "ui.router"
    ]

    export var todosModule = angular.module("todos.main", deps);

    todosModule.config(($stateProvider: angular.ui.IStateProvider) => {

        $stateProvider.state({
            name: "root.todos",
            url: "todos",
            templateUrl: "/todos/list.html",
            controller: "ListController",
            controllerAs: "listCtrl"
        });
    })

}
