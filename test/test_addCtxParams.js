var assert = require("assert");
var _ = require("underscore");

describe('Transformation addCtxParams()', function () {

    it("addCtxParams() without passed $path", function (done) {
        var testJSON = require( './pckg/TestEnum.json' );

        var prepareCtx = require( '../transform/addCtxPaths' ).transform;
        var jsonTools = require( 'json-tools' );
        var model = jsonTools.selectable({
            $src : {
                $json: testJSON
            }});

        var rval = prepareCtx(model);

        assert.ok(rval);
        assert.ok( rval.$isSelectable );

        assert.ok( rval.$prjDir );
        assert.ok(_.isString(rval.$prjDir ) );

        assert.ok( rval.$path );
        assert.ok(_.isString(rval.$path ) );

        done();
    });

    it("addCtxParams() with passed $path", function (done) {
        var testJSON = require( './pckg/TestEnum.json' );

        var prepareCtx = require( '../transform/addCtxPaths' ).transform;
        var jsonTools = require( 'json-tools' );
        var model = jsonTools.selectable({
            $src : {
                $json: testJSON
            }});

        var path = './pckg/TestEnum.json';

        // pass /test-directory
        var rval = prepareCtx(model, {
            $path : path,
            $prjDir : process.cwd() + "/test"
        });

        assert.ok(rval);
        assert.ok( rval.$isSelectable );
        assert.equal( rval.$path, path );

        done();
    });



});