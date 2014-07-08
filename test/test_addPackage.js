var assert = require("assert");
var _ = require("underscore");

describe('Transformation addPackage()', function () {

    it("addPackage()", function (done) {
        var testJSON = require( './TestEnum.json' );

        var prepareCtx = require( '../transform/addCtxPaths' ).transform;
        var transform = require( '../transform/addPackage' ).transform;

        var jsonTools = require( 'json-tools' );
        var model = jsonTools.selectable({
            $src : {
                $json: testJSON
            }});

        prepareCtx(model);
        var rval = transform( model );

        assert.ok(rval);
        assert.ok( rval.$isSelectable );
        assert.equal( rval.json.packageName, undefined );

        done();
    });

    it("addPackage() in subdir", function (done) {
        var testJSON = require( './pckg/TestEnum.json' );

        var prepareCtx = require( '../transform/addCtxPaths' ).transform;
        var transform = require( '../transform/addPackage' ).transform;

        var jsonTools = require( 'json-tools' );
        var model = jsonTools.selectable({
            $src : {
                $json: testJSON
            }});

        var path = './pckg/TestEnum.json';

        prepareCtx(model, {
            $path : path,
            $prjDir : process.cwd() + "/test"
        });
        var rval = transform( model );

        assert.ok(rval);
        assert.ok( rval.$isSelectable );
        assert.equal( rval.text( '#packageName' ), "package pckg;" );

        done();
    });

});