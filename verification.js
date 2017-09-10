/*
 * @Author: accord
 * @Date:   2017-09-09 19:41:46
 * @Last Modified by:   accord
 * @Last Modified time: 2017-09-10 16:26:58
 */

(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global.verification = factory());
}(this, (function() {
    'use strict';

    /*
     * @name regex
     * @kind function
     *
     * Validate regular expressions
     * @doc https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
     * @param expression
     * @param lastIndex
     * @return boolean
     */
    const regex = expression => string => {
        let reg = new RegExp(expression);
        return reg.test(string);
    };

    const assertString = value => {
        if (!isString(value)) {
            throw new TypeError('Data type must be string');
        }
    };



    /*===================================
     		verification base data
     ===================================*/

    /**
     * @name isUndefined
     * @kind function
     *
     * @description
     * Determines if a reference is undefined
     * 
     * @param  {[*]}  value Reference to check
     * @return {Boolean}   True if `value` is a undefined
     */
    const isUndefined = value => {
        return typeof value === 'undefined';
    };


    /**
     * @name isDefined
     * @kind function
     *
     * @description
     * Determines if a reference is defined
     * 
     * @param  {[*]}  value Reference to check
     * @return {Boolean}  True if `value` is a defined
     */
    const isDefined = value => {
        return typeof value !== 'undefined';
    };

    /**
     * @name isObject
     * @kind function
     *
     * @description 
     * Determines if a reference is an `object`.Unlike `typeof` in JavaScript, 
     * null's are not considered to be objects. Note that JavaScript arrays are objects.
     * 
     * @param  {[*]}  value Reference to check 
     * @return {Boolean}     True if `value` is a object
     */
    const isObject = value => {
        return value != null && typeof value === 'object';
    };

    /**
     * @name isString
     * @kind function
     *
     * @description
     * Determines if a reference is a String
     * 
     * @param  {[*]}  value Reference to check.
     * @return {Boolean}  True if `value` is a String
     */
    const isString = value => {
        return typeof value === 'string';
    };

    /**
     * @name isArray
     * @kind function
     *
     * @description
     * Determines if a reference is a Array
     * 
     * @param  {[*]}  value Reference to check.
     * @return {Boolean}  True if `value` is a Array
     */
    const isArray = value => {
        return Array.isArray(value);
    };

    /**
     * @name isNumber
     * @kind function
     *
     * @description
     * Determines if a reference is a Number
     * 
     * @param  {[*]}  value Reference to check.
     * @return {Boolean}  True if `value` is a Number
     */
    const isNumber = value => {
        return typeof value === 'number';
    };

    /**
     * @name isNumber
     * @kind function
     *
     * @description
     * Determines if a reference is a Date
     * 
     * @param  {[*]}  value Reference to check.
     * @return {Boolean}  True if `value` is a Date
     */
    const isDate = value => {
        return toString.call(value) === '[object Date]';
    };

    /**
     * @name isFunction
     * @kind function
     *
     * @description
     * Determines if a reference is a Function
     * 
     * @param  {[*]}  value Reference to check.
     * @return {Boolean}  True if `value` is a Function
     */
    const isFunction = value => {
        return typeof value === 'function';
    };

    /**
     * @name isRegExp
     * @kind function
     *
     * @description
     * Determines if a reference is a RegExp
     * 
     * @param  {[*]}  value Reference to check.
     * @return {Boolean}  True if `value` is a RegExp
     */
    const isRegExp = value => {
        return toString.call(value) === '[object RegExp]';
    };

    /**
     * @name isFile
     * @kind function
     *
     * @description
     * Determines if a reference is a File
     * 
     * @param  {[*]}  value Reference to check.
     * @return {Boolean}  True if `value` is a File
     */
    const isFile = obj => {
        return toString.call(value) === '[object File]';
    };

    /**
     * @name isFormData
     * @kind function
     *
     * @description
     * Determines if a reference is a FormData
     * 
     * @param  {[*]}  value Reference to check.
     * @return {Boolean}  True if `value` is a FormData
     */
    const isFormData = obj => {
        return toString.call(value) === '[object FormData]'
    };

    /**
     * @name isBoolean
     * @kind function
     *
     * @description
     * Determines if a reference is a Boolean
     * 
     * @param  {[*]}  value Reference to check.
     * @return {Boolean}  True if `value` is a Boolean
     */
    const isBoolean = value => {
        return typeof value === 'boolean';
    };


    /**
     * @name isRequired
     * @kind function
     *
     * @description
     * Determines if a reference is a Required
     * 
     * @param  {[*]}  value Reference to check.
     * @return {Boolean}  True if `value` is a Required
     */
    const isRequired = value => {
        if (isArray(value)) {
            return value.length > 0;
        }
        if (isNumber(value)) {
            return value > 0;
        }
        if (isObject(value)) {
            return value > 0;
        }
        if (isString(value)) {
            return Object.keys(value).length > 0;
        }
        return Boolean(value);
    };


    /*===================================
     		 verification String
     ===================================*/

    /**
     * @name isURL
     * @kind function
     *
     * @description
     * Determines if a str is a url
     * 
     * @param  {String}  String to check.
     * @return {Boolean}  True if `str` is a url
     */
    const isURL = str => {
        assertString(str);
        const urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        return regex(urlRegex)(str);
    };

    /**
     * @name isLowervase
     * @kind function
     *
     * @description
     * Determines if a str is a lowervase
     * 
     * @param  {String}  String to check.
     * @return {Boolean}  True if `str` is a lowervase
     */
    const isLowervase = str => {
        assertString(str);
        return str === str.toLowerCase();
    };

    /**
     * @name isUppercase
     * @kind function
     *
     * @description
     * Determines if a str is a uppercase
     * 
     * @param  {String}  String to check.
     * @return {Boolean}  True if `str` is a uppercase
     */
    const isUppercase = str => {
        assertString(str);
        return value === value.toUpperCase();
    };

    /**
     * @name isNumeric
     * @kind function
     *
     * @description
     * Determines if a str is a numeric
     * 
     * @param  {String}  String to check.
     * @return {Boolean}  True if `str` is a numeric
     */
    const isNumeric = str => {
        assertString(str);
        const numericRegex = /^[-+]?[0-9]+$/;
        return regex(numericRegex)(str);
    }

    /**
     * @name isEmail
     * @kind function
     *
     * @description
     * Determines if a str is a email
     * 
     * @param  {String}  String to check.
     * @return {Boolean}  True if `str` is a email
     */
    const isEmail = str => {
        assertString(str);
        const sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
        const sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
        const sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
        const sQuotedPair = '\\x5c[\\x00-\\x7f]';
        const sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
        const sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
        const sDomainRef = sAtom;
        const sSubDomain = '(' + sDomainRef + '|' + sDomainLiteral + ')';
        const sWord = '(' + sAtom + '|' + sQuotedString + ')';
        const sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
        const sLocalPart = sWord + '(\\x2e' + sWord + ')*';
        const sAddrSpec = sLocalPart + '\\x40' + sDomain;
        const sValidEmail = '^' + sAddrSpec + '$';
        return regex(sValidEmail)(str);
    };

    /**
     * @name isAscii
     * @kind function
     *
     * @description
     * Determines if a str is a ascii
     * 
     * @param  {String}  String to check.
     * @return {Boolean}  True if `str` is a ascii
     */
    const isAscii = str => {
        assertString(str);
        const asciiRegex = /^[\x00-\x7F]+$/;
        return regex(asciiRegex)(str);
    };

    /**
     * @name isIpv4
     * @kind function
     *
     * @description
     * Determines if a str is a ipv4
     * 
     * @param  {String}  String to check.
     * @return {Boolean}  True if `str` is a ipv4
     */
    const isIpv4 = str => {
        let ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipRegex.test(str);
    };

    /**
     * @name isIpv6
     * @kind function
     *
     * @description
     * Determines if a str is a ipv6
     * 
     * @param  {String}  String to check.
     * @return {Boolean}  True if `str` is a ipv6
     */
    const isIpv6 = str => {
        let ipv6Regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
        return ipRegex.test(str);
    };

    /**
     * @name isIp
     * @kind function
     *
     * @description
     * Determines if a str is a ip
     * 
     * @param  {String}  String to check.
     * @return {Boolean}  True if `str` is a ip
     */
    const isIp = str => isIpv4(str) || isIpv6(str);

    // const isInt = value => {
    // 	if(isNumber(value)){
    // 		return parseInt(value) === number;
    // 	}
    // };

    const verification = {
        isUndefined: isUndefined,
        isDefined: isDefined,
        isArray: isArray,
        isObject: isObject,
        isString: isString,
        isNumber: isNumber,
        isDate: isDate,
        isFunction: isFunction,
        isRegExp: isRegExp,
        isFile: isFile,
        isFormData: isFormData,
        isBoolean: isBoolean,
        isRequired: isRequired,
        isURL: isURL,
        isLowervase: isLowervase,
        isUppercase: isUppercase,
        isNumeric: isNumeric,
        isEmail: isEmail,
        isAscii: isAscii,
        isIpv4: isIpv4,
        isIpv6: isIpv6,
        isIp: isIp,
    };

    return verification;

})));