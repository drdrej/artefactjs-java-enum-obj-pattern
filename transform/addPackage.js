
exports.transform = function( model, options ) {
    var _ = require( 'underscore' );

    if( !model.$path || !_.isString(model.$path) ) {
        console.log( "WARN: has no $path passed // model.$path" );
        return model;
    }

    if( model.$path == "." ) {
        console.log( "WARN: only default $path is passed. skip package calculation." );
        return model;
    }

    var pathTools = require( 'path' );

    var path = pathTools.resolve(model.$prjDir, model.$path);
    var fs = require( 'fs' );
    var fileStats = fs.statSync(path);

    if( fileStats && fileStats.isFile() ) {
        path = pathTools.dirname( path );
    }

    var relative = pathTools.relative( path, model.$prjDir );

    var pckgName = "";
    if( path.length > model.$prjDir.length ) {
        pckgName = path.substr(model.$prjDir.length);

        var S = require( 'string' );
        var str = S(pckgName);

        if( str.startsWith('/') ) {
            pckgName = pckgName.substr(1);
            pckgName = S(pckgName)
                .replaceAll('/', '.').s;
        }
    }

    if( !relative || relative == "." ) {
        model.put( '#packageName', "" );
    } else {
        model.put( '#packageName',
                "package " + pckgName + ";" );
    }

    return model;
};