/// <reference path="module.ts" />
namespace ToDos {
    interface ItemStateParams {
        id: string;
    }
    class ItemController {
        public todo: ToDo;
        constructor($stateParams: ItemStateParams,
                    todoService: ToDoService) {
            todoService.get($stateParams.id)
                .then((todo) => {
                    this.todo = todo;
                });
        }

        public save() {

            this.todo.due = moment(this.todo.due).toISOString();
            debugger;
        }
    }
    todosModule.controller("ItemController", ItemController);
}
