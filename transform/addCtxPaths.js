
exports.transform = function( model, options ) {
    var _ = require( 'underscore' );

    if( !options || !_.isObject(options) ) {
        model.$prjDir = process.cwd();
        model.$path = ".";

        return model;
    }

    model.$prjDir = options.$prjDir && _.isString(options.$prjDir) ? options.$prjDir : process.cwd();
    model.$path = (options.$path && _.isString(options.$path)) ? options.$path : ".";

    return model;
};