/**
 * @constructor
 */
var Common = (function() {
    'use strict';

    function Common() {
        // enforces new
        if (!(this instanceof Common)) {
            return new Common();
        }
    }

    /**
     * Shows numbers in the given range. If number is divisible by 3 
     * prints fizz, and if is divisible by 5 prints buzz
     * @params {number} from
     * @params {number} to
     * @return {string}
     */
    Common.prototype.showNumbers = function(from, to) {
        var i, len, output, by3, by5;
        output = '';
        if(typeof from === 'number' && typeof to === 'number'){
            for (i = from, len = to; i <= len; i++) {
                by3 = i % 3 === 0;
                by5 = i % 5 === 0;
                if(by3){
                    output += 'fizz';
                }
                if(by5){
                    output += 'buzz';
                }
                if(!by3 && !by5){
                    output += i;
                } 
                output += '\n';
            }
            this.log(output);
        } else {
            throw new Error('Unexpected parameter type. Number expected');
        }
        return output;
    };

    /**
     * Recognizes if is running on browser. If so, writes in window.document,
     * otherwise prints in console
     * @params {string} text
     */
    Common.prototype.log = function(text) {
        if(typeof window !== 'undefined') {
            document.write('<pre>'+text+'</pre>');
        } else {
            console.log(text);
        }
    };

    return Common;

}());

module.exports = Common;