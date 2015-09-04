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

        constructor(private $state: angular.ui.IStateService) {

        }
        public toggleMessages() {
            this.showMessages = !this.showMessages;
        }

        public stateIs(stateName: string) {

            return this.$state.is(stateName);

        }
    }

    rootModule.controller("RootController", RootController)
}
