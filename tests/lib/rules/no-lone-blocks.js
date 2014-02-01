/**
 * @fileoverview Tests for no-lone-blocks rule.
 * @author Brandon Mills
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

eslintTester.addRuleTest("lib/rules/no-lone-blocks", {
    valid: [
        "if (foo) { if (bar) { baz(); } }",
        "do { bar(); } while (foo)",
        "function foo() { while (bar) { baz() } }"
    ],
    invalid: [
        { code: "{}", errors: [{ message: "Block is nested inside another block.", type: "BlockStatement"}] },
        { code: "foo(); {} bar();", errors: [{ message: "Block is nested inside another block.", type: "BlockStatement"}] },
        { code: "if (foo) { bar(); {} baz(); }", errors: [{ message: "Block is nested inside another block.", type: "BlockStatement"}] },
        { code: "{ { } }", errors: [{ message: "Block is nested inside another block.", type: "BlockStatement"}, { message: "Block is nested inside another block.", type: "BlockStatement"}] },
        { code: "function foo() { bar(); {} baz(); }", errors: [{ message: "Block is nested inside another block.", type: "BlockStatement"}] },
        { code: "while (foo) { {} }", errors: [{ message: "Block is nested inside another block.", type: "BlockStatement"}] }
    ]
});
