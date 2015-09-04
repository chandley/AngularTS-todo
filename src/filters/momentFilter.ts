/// <reference path="module.ts" />

namespace ToDos {

    function momentFilter(val: any, format?: string) {
        if (typeof val !== "string") return val;

        var m = moment(val);

        if(!m.isValid()) return val;

        return m.format(format || "DD MM YYYY");

    }

    filterModule.filter("moment", () => momentFilter);

}
