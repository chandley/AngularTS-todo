/// <reference path="module.ts" />

namespace ToDos {

    interface ToDo {
        id: string;
        text: string;
        tags: string[]; // actuall dates
        due: string; // actuall date
        done: string; // actuall date

    }

    class ListController {
        public todos: ToDo[];

        constructor(private todoService: ToDoService,
                    private $window: angular.IWindowService) {

            todoService.list()
                .then((todos) => {
                    this.todos = todos;
                })
                .catch((response) => {
                    $window.console.log(response);
                });
        }

    }

    todosModule.controller("ListController", ListController);

}