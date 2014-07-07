var assert = require("assert");
var _ = require("underscore");

describe('Transformation addStates()', function () {

    it("addStates()", function (done) {
        var testJSON = require( './TestEnum.json' );
        var addStates = require( '../transform/addStates' ).transform;

        var jsonTools = require( 'json-tools' );
        var model = jsonTools.selectable({
            $src : {
                $json: testJSON
            }});

        var rval = addStates( model );

        assert.ok(rval);

        done();
    });

});