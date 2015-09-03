///reference path="module.ts" />

namespace ToDos {

    export class ToDoService {

        constructor(private $http: angular.IHttpService) {

        }

        public list() {

            return this.$http.get<ToDo[]>("/api/todos").
                then((response) => {
                    return response.data;
                });

        }
        public add(todo: ToDo) {
            return this.$http.post("/api/todos", todo)
            .then((response) => response.data)
        }
    }

    todosModule.service("todoService", ToDoService);
}
