import { luaGenerator } from "blockly/lua";

luaGenerator["controls_forever"] = function (block) {
  const branch = luaGenerator.statementToCode(block, "DO");
  return "while(true) do" + branch + "end";
};

luaGenerator["math_evenly_divisible"] = function (block) {
  const argument1 = luaGenerator.valueToCode(block, "DIVIDEND", luaGenerator.ORDER_NONE) || "0";
  const argument2 = luaGenerator.valueToCode(block, "DIVISOR", luaGenerator.ORDER_MEMBER) || "0";
  return [argument1 + " % " + argument2 + " == 0", luaGenerator.ORDER_MEMBER];
};
