export function stringify(arg) {
    if (typeof arg === "string")
        return arg;
    return JSON.stringify(arg);
}
export function log(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    console.log(message, optionalParams);
}
export function debug(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    console.log(message, optionalParams);
}
/**
 * @private
 * Given a min and max, restrict the given number
 * to the range.
 * @param min the minimum
 * @param n the value
 * @param max the maximum
 */
export function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}
/** @private */
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/** @private */
export function debounce(fn, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout, args, context, timestamp, result;
    return function () {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var later = function () {
            var last = Date.now() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate)
                    result = fn.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow)
            result = fn.apply(context, args);
        return result;
    };
}
/**
 * @private
 * Apply default arguments if they don't exist in
 * the first object.
 * @param the destination to apply defaults to.
 */
export function defaults(dest) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = arguments.length - 1; i >= 1; i--) {
        var source = arguments[i];
        if (source) {
            for (var key in source) {
                if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}
/** @private */
export function isBoolean(val) { return typeof val === 'boolean'; }
/** @private */
export function isString(val) { return typeof val === 'string'; }
/** @private */
export function isNumber(val) { return typeof val === 'number'; }
/** @private */
export function isFunction(val) { return typeof val === 'function'; }
/** @private */
export function isDefined(val) { return typeof val !== 'undefined'; }
/** @private */
export function isUndefined(val) { return typeof val === 'undefined'; }
/** @private */
export function isPresent(val) { return val !== undefined && val !== null; }
/** @private */
export function isBlank(val) { return val === undefined || val === null; }
/** @private */
export function isObject(val) { return typeof val === 'object'; }
/** @private */
export function isArray(val) { return Array.isArray(val); }
;
/** @private */
export function isPrimitive(val) {
    return isString(val) || isBoolean(val) || (isNumber(val) && !isNaN(val));
}
;
/** @private */
export function isTrueProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
}
;
/** @private */
export function isCheckedProperty(a, b) {
    if (a === undefined || a === null || a === '') {
        return (b === undefined || b === null || b === '');
    }
    else if (a === true || a === 'true') {
        return (b === true || b === 'true');
    }
    else if (a === false || a === 'false') {
        return (b === false || b === 'false');
    }
    else if (a === 0 || a === '0') {
        return (b === 0 || b === '0');
    }
    // not using strict comparison on purpose
    return (a == b); // tslint:disable-line
}
;
/** @private */
export function reorderArray(array, indexes) {
    var element = array[indexes.from];
    array.splice(indexes.from, 1);
    array.splice(indexes.to, 0, element);
    return array;
}
/** @private */
export function removeArrayItem(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
}
/** @private */
export function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
    // The logic required to know when the sliding item should close (openAmount=0)
    // depends on three booleans (isCloseDirection, isMovingFast, isOnCloseZone)
    // and it ended up being too complicated to be written manually without errors
    // so the truth table is attached below: (0=false, 1=true)
    // isCloseDirection | isMovingFast | isOnCloseZone || shouldClose
    //         0        |       0      |       0       ||    0
    //         0        |       0      |       1       ||    1
    //         0        |       1      |       0       ||    0
    //         0        |       1      |       1       ||    0
    //         1        |       0      |       0       ||    0
    //         1        |       0      |       1       ||    1
    //         1        |       1      |       0       ||    1
    //         1        |       1      |       1       ||    1
    // The resulting expression was generated by resolving the K-map (Karnaugh map):
    var shouldClose = (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
    return shouldClose;
}
/** @private */
var ASSERT_ENABLED = true;
/** @private */
function _runInDev(fn) {
    if (ASSERT_ENABLED === true) {
        return fn();
    }
}
/** @private */
function _assert(actual, reason) {
    if (!actual && ASSERT_ENABLED === true) {
        var message = 'IONIC ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
}
/** @private */
export { _assert as assert };
/** @private */
export { _runInDev as runInDev };
