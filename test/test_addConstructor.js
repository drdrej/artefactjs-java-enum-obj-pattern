var assert = require("assert");
var _ = require("underscore");

describe('Transformation addConstructor()', function () {

    it("addConstructor()", function (done) {
        var testJSON = require( './TestEnum.json' );
        var transform = require( '../transform/addConstructor' ).transform;

        var jsonTools = require( 'json-tools' );
        var model = jsonTools.selectable({
            $src : {
                $json: testJSON
            }});

        var rval = transform( model );

        assert.ok(rval);
        assert.equal( rval.text( '#constructorParams'), "final String _id, final int count" );
        assert.ok(_.isArray(rval.json.constructors));

        done();
    });

});