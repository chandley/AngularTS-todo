/// <reference path="module.ts" />

namespace ToDos {

    function momentInput(): angular.IDirective {

            return {
                restrict: "A",
                require: "ngModel",
                link: linkMomentInput
            };

        }

        // SEAC
        function linkMomentInput(scope, elem: JQuery, attrs, ctrl: angular.INgModelController) {

                ctrl.$parsers.push((val) => moment(val));

        }




    directivesModule.directive("momentInput", momentInput);

}




