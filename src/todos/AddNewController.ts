/// <reference path="module.ts" />
namespace ToDos {
    class AddNewController {
        public text: string;
        constructor(private todoService: ToDoService,
                    private $modalInstance: angular.ui.bootstrap.IModalServiceInstance) {
        }
        public save() {
            var todo = {
                id: Date.now().toString(),
                text: this.text,
                created: moment().toISOString()
            };
            this.todoService.add(todo)
                .then(() => {
                    this.$modalInstance.close();
                });
        }
    }
    todosModule.controller("AddNewController", AddNewController);
}
