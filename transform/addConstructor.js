

exports.transform = function( model, options ) {
    var params = model.list( '.model > .fields > *',
                             "final <%= text( '#type' ) %> <%= text( '#name' ) %>", ", ");
    model.put( '#constructorParams', params);

    var tmpl = "file://" + __dirname +"/../templates/Constructor.java.tmpl";
    var constructor = model.render(tmpl);
    model.put( '#constructors', [constructor]);

    return model;
};
