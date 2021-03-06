/**
 * @fileoverview Tests for no-eval rule.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("../../../lib/eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("lib/rules/no-eval", {
    valid: [
        "Eval(foo)"
    ],
    invalid: [
        { code: "eval(foo)", errors: [{ message: "eval can be harmful.", type: "CallExpression"}] }
    ]
});
