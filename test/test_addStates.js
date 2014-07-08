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
        assert.ok( rval.$isSelectable );
        assert.ok( rval.json.states );
        assert.equal( rval.json.states.length, 2 );

        assert.equal( rval.json.states[0], "START(XYZ, 11)" );
        assert.equal( rval.json.states[1], "END(ABC, 12)" );

        done();
    });

});