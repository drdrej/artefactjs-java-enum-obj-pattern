
exports.transform = function( model, options ) {
    var states = [];
/*
    var parsedStates = model.first( '.$src > .$json > .model > .states' );

    if( !parsedStates )
    {
        return model;
    }
*/
    var _ = require( 'underscore' );

    model.each( ".$src > .$json >.model > .states > *", function( fieldDef ) {
        var fieldTmpl = "private final <%= text( '.type' ) %>  <%= text( '.name' ) %>;";
        var state = {
            name : fieldDef.text( '#name' ),
            type : fieldDef.text( '#name' )
        };

        states.push(state);
    });

    /*
    model.put( "#fields", fields );


    var methods = [];

    var tmpl = "file://" + __dirname +"/../templates/GetterMethod.java.tmpl";

    model.each( ".$src > .$json > .model > .values > *",
        function( fieldDef ) {
            var S = require( 'string' );
            var name = fieldDef.text( '#name' );
            var methodName = "get" + S(name).capitalize();

            fieldDef.put( '#methodName', methodName);

            var field = fieldDef.render( tmpl );
            methods.push(field);
        });

    model.put( '#methods', methods);
*/
    return model;
};