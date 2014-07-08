
exports.transform = function( model, options ) {
    var _ = require( 'underscore' );

    model.put( '#className',
        model.text( '.$src > .$json > .name'));

    return model;
};