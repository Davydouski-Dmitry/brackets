module.exports = function check(str, bracketsConfig) {
  var opens = '';
  var closes = '';
    bracketsConfig.forEach( (cfg) => {
        opens += cfg[0];
        closes += cfg[1];
    });

    var stack = [];

    for (var i in str) {
        var s = str[i];
        opn = !!~opens.indexOf(s);
        cls = !!~closes.indexOf(s);
        if (opn && cls) { 
            if (s === stack[stack.length-1]) {
                stack.pop(s);
            } else {
                stack.push(s);
            }
        } else {
            if (opn) {
                stack.push(s);
            } else {
                if (opens.indexOf(stack.pop()) !== closes.indexOf(s)) {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
};
