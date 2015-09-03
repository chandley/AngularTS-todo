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
        public todos:ToDo[];

        constructor(private todoService:ToDoService,
                    private $window:angular.IWindowService,
                    private $modal:ModalService) {
            this.load();
        }


        private
            load()
            {
                this.todoService.list()
                    .then((todos) => {
                        this.todos = todos;
                    })
                    .catch((response) => {
                        this.$window.console.log(response);
                    });
            }
        public addNew() {
            this.$modal.open({
                controller: "AddNewController",
                controllerAs: "addNewCtrl",
                templateUrl: "/todos/addnew.html",
                backdrop: "static" // prevents clickaway from closing
            }).result.then(() => {
                    this.load();


                });
        }
    }

    todosModule.controller("ListController", ListController);



}