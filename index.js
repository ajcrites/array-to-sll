module.exports = function (arr) {
    return arr.reduceRight(function (prev, next) {
        var ll = {};
        ll.next = prev;
        ll.value = next;
        return ll;
    }, {});
};
