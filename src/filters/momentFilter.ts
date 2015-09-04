/// <reference path="module.ts" />

namespace ToDos {

    function momentFilter(val: any) {
        if (typeof val !== "string") return val;

        var m = moment(val);

        if(!m.isValid()) return val;

        return m.format("DD MM YYYY");

    }

    filterModule.filter("moment", () => momentFilter);

}
