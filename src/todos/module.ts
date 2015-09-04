
namespace ToDos {

    var deps = [
        "ui.router",
        "ui.bootstrap"
    ]

    export var todosModule = angular.module("todos.main", deps);

    todosModule.config(($stateProvider: angular.ui.IStateProvider) => {

        $stateProvider
            .state({
                name: "root.todos",
                url: "todos",
                templateUrl: "/todos/list.html",
                controller: "ListController",
                controllerAs: "listCtrl"
            })
            .state({
                name: "root.todos.item",
                url: "/:id",
                templateUrl: "/todos/item.html",
                controller: "ItemController",
                controllerAs: "itemCtrl"
            });
    })

}
