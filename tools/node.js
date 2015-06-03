var UglifyJS = require("uglify-js/tools/node");

UglifyJS.AST_Scope.DEFMETHOD("next_mangled", function(options){
    var ext = this.enclosed;
    out: while (true) {
        var m = new Array(++this.cname + 2).join('💩');

        for (var i = ext.length; --i >= 0;) {
            var sym = ext[i];
            var name = sym.mangled_name || (sym.unmangleable(options) && sym.name);
            if (m == name) continue out;
        }
        return m;
    }
});

module.exports = UglifyJS;