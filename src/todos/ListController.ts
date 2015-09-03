/// <reference path="module.ts" />

namespace ToDos {

    class ListController {
        public todos: any [];

        constructor(private $http: angular.IHttpBackendService) {

            $http.get("/api/todos")
                .then((response) => {
                    this.todos = response.data;
                })

        }

    }

    todosModule.controller("ListController", ListController);

}