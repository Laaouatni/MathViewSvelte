export default parseExpression;

/**
 * Parse an expression into the required tree
 * @param str {string}
 */
function parseExpression(str) {
  // break string into tokens, in reverse order because pop() is faster than shift()
  const tokens = str.match(/[.0-9Ee]+|[^\s]/g).reverse();
  const tree = parseTokens(tokens, 0);
  if (tokens.length) {
    throw new Error(`Unexpected ${tokens.pop()} after expression`);
  }
  return tree;
}

const BINARY_PRECEDENCE = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
};

const UNARY_PRECEDENCE = {
  "+": 10,
  "-": 10,
};

/**
 * Given an array of tokens in reverse order, return binary expression tree
 *
 * @param tokens {string[]} tokens
 * @param minPrec {number} stop at operators with precedence smaller than this
 */
function parseTokens(tokens, minPrec) {
  if (!tokens.length) {
    throw new Error("Unexpected end of expression");
  }

  // get the left operand
  let leftToken = tokens.pop();
  let leftVal;
  if (leftToken === "(") {
    leftVal = parseTokens(tokens, 0);
    if (tokens.pop() !== ")") {
      throw new Error("Unmatched (");
    }
  } else if (UNARY_PRECEDENCE[leftToken] != undefined) {
    const operand = parseTokens(tokens, UNARY_PRECEDENCE[leftToken]);
    if (typeof operand === "number" && leftToken === "-") {
      leftVal = -operand;
    } else if (typeof operand === "number" && leftToken === "+") {
      leftVal = operand;
    } else {
      leftVal = {
        operation: leftToken,
        values: [operand],
      };
    }
  } else {
    leftVal = Number(leftToken);
    if (isNaN(leftVal)) {
      throw new Error(`invalid number ${leftToken}`);
    }
  }

  // Parse binary operators until we hit the end or a stop
  while (tokens.length) {
    // end of expression
    const opToken = tokens.pop();
    const opPrec = BINARY_PRECEDENCE[opToken];
    if (opToken === ")" || (opPrec != undefined && opPrec < minPrec)) {
      // We have to stop here.  put the token back and return
      tokens.push(opToken);
      return leftVal;
    }
    if (opPrec == undefined) {
      throw new Error(`invalid operator ${opToken}`);
    }

    // we have a binary operator.  Get the right operand
    const operand = parseTokens(tokens, opPrec + 1);
    if (typeof leftVal === "object" && leftVal.operation === opToken) {
      // Extend the existing operation
      leftVal.values.push(operand);
    } else {
      // Need a new operation
      leftVal = {
        values: [leftVal, operand],
        operation: opToken,
      };
    }
  }
  return leftVal;
}
