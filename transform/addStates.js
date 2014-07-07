/**
 * creates enum states inside an enum.
 *
 * @param model passed data
 * @param options global context
 *
 * @return {*}
 */
exports.transform = function( model, options ) {
    var tmpl = "file://" + __dirname +"/../templates/State.java.tmpl";
    var _ = require( 'underscore' );

    var states = model.first( '.$src > .$json >.model > .states' );

    var rval = [];
    var keys = _.keys(states);

    _.each( keys, function( key ) {
        var values = states[key];

        var state = {
            name : key,
            values : values
        };

        var JsonTools = require('json-tools');
        var json = JsonTools.selectable( state );

        var rendered = json.render(tmpl);

        if( rendered ) {
            var S = require( 'string' );
            rendered = S(rendered).collapseWhitespace().s;
        }

        rval.push(rendered);
    });

    model.put( '#states', rval );


    return model;
};