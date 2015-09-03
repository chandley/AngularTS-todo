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
    }

    rootModule.controller("RootController", RootController)
}
