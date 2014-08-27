# array-to-sll

Convert an array to a simple Singly Linked List.  The head
is returned, and you can traverse the list using `.next` to
get the next node, and use `.value` to see the value of the
node.

## Installation

    npm install array-to-sll

## Example:

    var arrayToSll = require("array-to-sll");
    console.log(arrayToSll([1,2,3]));

This will result in

    { value: 1,
      next: {
          value: 2,
          next: {
              value: 3,
              next: {} } } }

The end of the list has no `.value` or `.next` property.

### Using for serialization of asynchronous calls

Instead of keeping track of an array position for
serialization, you can iterate through the list.

    (function serializeIo(item) {
        if (item.next) {
            performIo(item.value, function (err) {
                serializeIo(item.next);
            });
        }
    })(arrayToSll(array));
