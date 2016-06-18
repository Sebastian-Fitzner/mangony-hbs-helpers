// 'use strict';
//
// require('mocha');
// var expect = require('chai').expect;
// var helperFn = require('../lib/helpers/merge');
//
// describe('Merge Helper', function () {
// 	it('merge object with object', function () {
// 		var obj1 = {
// 			"a": "test"
// 		};
// 		var obj2 = {
// 			hash: {
// 				with: {
// 					"b": "test2"
// 				}
// 			}
// 		};
//
// 		var obj3 = helperFn(obj1, obj2);
// 		var expected = {
// 			"a": "test",
// 			"b": "test2"
// 		};
//
// 		expect(obj3).to.be.an('object');
// 		expect(obj3).to.equal(expected);
// 	});
// });