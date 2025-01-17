/**
Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.

@example
```
import stripAnsi = require('../strip-ansi');

stripAnsi('\u001B[4mUnicorn\u001B[0m');
//=> 'Unicorn'

stripAnsi('\u001B]8;;https://github.com\u0007Click\u001B]8;;\u0007');
//=> 'Click'
```
*/
declare function stripAnsi(string: string): string;

export = stripAnsi;
