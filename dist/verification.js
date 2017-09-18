(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("verification", [], factory);
	else if(typeof exports === 'object')
		exports["verification"] = factory();
	else
		root["verification"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*
	 * @Author: accord
	 * @Date:   2017-09-09 19:41:46
	 * @Last Modified by:   accord
	 * @Last Modified time: 2017-09-11 11:09:17
	 */
	
	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.verification = factory();
	})(undefined, function () {
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
	
	    var regex = function regex(expression) {
	        return function (string) {
	            var reg = new RegExp(expression);
	            return reg.test(string);
	        };
	    };
	
	    var assertString = function assertString(value) {
	        if (!isString(value)) {
	            throw new TypeError('Data type must be string');
	        }
	    };
	
	    var assertNumber = function assertNumber(value) {
	        if (!isNumber(value)) {
	            throw new TypeError('Data type must be Number');
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
	    var isUndefined = function isUndefined(value) {
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
	    var isDefined = function isDefined(value) {
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
	    var isObject = function isObject(value) {
	        return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
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
	    var isString = function isString(value) {
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
	    var isArray = function isArray(value) {
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
	    var isNumber = function isNumber(value) {
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
	    var isDate = function isDate(value) {
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
	    var isFunction = function isFunction(value) {
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
	    var isRegExp = function isRegExp(value) {
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
	    var isFile = function isFile(obj) {
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
	    var isFormData = function isFormData(obj) {
	        return toString.call(value) === '[object FormData]';
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
	    var isBoolean = function isBoolean(value) {
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
	    var isRequired = function isRequired(value) {
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
	    var isURL = function isURL(str) {
	        assertString(str);
	        var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
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
	    var isLowervase = function isLowervase(str) {
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
	    var isUppercase = function isUppercase(str) {
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
	    var isNumeric = function isNumeric(str) {
	        assertString(str);
	        var numericRegex = /^[-+]?[0-9]+$/;
	        return regex(numericRegex)(str);
	    };
	
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
	    var isEmail = function isEmail(str) {
	        assertString(str);
	        var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
	        var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
	        var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
	        var sQuotedPair = '\\x5c[\\x00-\\x7f]';
	        var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
	        var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
	        var sDomainRef = sAtom;
	        var sSubDomain = '(' + sDomainRef + '|' + sDomainLiteral + ')';
	        var sWord = '(' + sAtom + '|' + sQuotedString + ')';
	        var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
	        var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
	        var sAddrSpec = sLocalPart + '\\x40' + sDomain;
	        var sValidEmail = '^' + sAddrSpec + '$';
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
	    var isAscii = function isAscii(str) {
	        assertString(str);
	        var asciiRegex = /^[\x00-\x7F]+$/;
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
	    var isIpv4 = function isIpv4(str) {
	        var ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
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
	    var isIpv6 = function isIpv6(str) {
	        var ipv6Regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
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
	    var isIp = function isIp(str) {
	        return isIpv4(str) || isIpv6(str);
	    };
	
	    //verification option
	
	    //起息日
	    var valueDate = function valueDate(_valueDate, maturityDate) {
	        assertString(_valueDate);
	        assertString(maturityDate);
	        _valueDate = new Date(_valueDate.replace(/-/g, "/"));
	        maturityDate = new Date(maturityDate.replace(/-/g, "/"));
	        return _valueDate < maturityDate;
	    };
	
	    //到期日
	    var maturityDate = function maturityDate(_maturityDate, valueDate) {
	        assertString(_maturityDate);
	        assertString(valueDate);
	        valueDate = new Date(valueDate.replace(/-/g, "/"));
	        _maturityDate = new Date(_maturityDate.replace(/-/g, "/"));
	        return valueDate < _maturityDate;
	    };
	
	    //验证上执行价
	    var ValidationUpperStrikePrice = function ValidationUpperStrikePrice(upperStrikePrice, lowerStrikePrice) {
	        assertNumber(upperStrikePrice);
	        assertNumber(lowerStrikePrice);
	        return upperStrikePrice >= lowerStrikePrice;
	    };
	
	    //验证下执行价
	    var ValidationLowerStrikePrice = function ValidationLowerStrikePrice(upperStrikePrice, lowerStrikePrice) {
	        assertNumber(upperStrikePrice);
	        assertNumber(lowerStrikePrice);
	        return upperStrikePrice <= lowerStrikePrice;
	    };
	
	    var verification = {
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
	        isIp: isIp
	    };
	
	    return verification;
	});

/***/ })
/******/ ])
});
;
//# sourceMappingURL=verification.js.map