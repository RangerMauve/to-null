"use strict";
var test = require("tape");

var toNull = require("./");

test("Null is null", function (t) {
	t.plan(1);
	t.equal(toNull(null), null, "is null");
});

test("False is null", function (t) {
	t.plan(1);
	t.equal(toNull(false), null, "is null");
});

test("Undefined is null", function (t) {
	t.plan(1);
	t.equal(toNull(undefined), null, "is null");
});

test("NaN is null", function (t) {
	t.plan(1);
	t.equal(toNull(NaN), null, "is null");
});

test("Strings pass through", function (t) {
	t.plan(1);
	var value = "test";
	t.equal(toNull(value), value, "isn't null");
});

test("Empty strings pass through", function (t) {
	t.plan(1);
	var value = "";
	t.equal(toNull(value), value, "isn't null");
});

test("Empty arrays pass through", function (t) {
	t.plan(1);
	var value = [];
	t.equal(toNull(value), value, "isn't null");
});
