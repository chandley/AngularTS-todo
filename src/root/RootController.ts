/**
 * Created by chrisha on 03/09/15.
 */

/// <reference path="module.ts" />
namespace ToDos {

    class RootController {
        public messages: string[] = [
            "Welcome",
            "New version is out"
        ];

        public showMessages = true;
        public toggleMessages() {
            this.showMessages = !this.showMessages;
        }
    }

    rootModule.controller("RootController", RootController)
}
