var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function merge(collection_1, collection_2) {
    var max = Math.max.apply(Math, __spreadArray(__spreadArray([], collection_1, false), collection_2, false));
    var counts = new Array(max + 1).fill(0);
    for (var _i = 0, collection_1_1 = collection_1; _i < collection_1_1.length; _i++) {
        var num = collection_1_1[_i];
        counts[num]++;
    }
    for (var _a = 0, collection_2_1 = collection_2; _a < collection_2_1.length; _a++) {
        var num = collection_2_1[_a];
        counts[num]++;
    }
    var merged = [];
    for (var i = 0; i < counts.length; i++) {
        for (var j = 0; j < counts[i]; j++) {
            merged.push(i);
        }
    }
    return merged;
}
console.log(merge([1, 4, 3], [2, 5, 6]));
