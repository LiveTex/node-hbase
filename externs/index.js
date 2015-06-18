

/**
 * @namespace
 */
var hbase = {};


/**
 * @param {!Object} options
 * @constructor
 */
hbase.Client = function(options) {};


/**
 * @param {string} tableKey
 * @param {string} rowKey
 * @return {!hbase.Row}
 */
hbase.Client.prototype.getRow = function(tableKey, rowKey) {};


/**
 * @param {!hbase.Client} client
 * @param {string} tableKey
 * @param {string} rowKey
 * @constructor
 */
hbase.Row = function(client, tableKey, rowKey) {};


/**
 * @param {(string|!Array.<string>)} columns
 * @param {(string|!Array.<string>)} values
 * @param {!function(?Error)} callback
 * @param {number=} opt_timeout
 */
hbase.Row.prototype.put = function(columns, values, callback, opt_timeout) {};


/**
 * @param {(string|!Array.<string>)} columns
 * @param {function(?Error, Array.<{column:string, $:string}>)} callback
 * @param {number=} opt_timeout
 * @param {!Object=} opt_options
 */
hbase.Row.prototype.get =
    function(columns, callback, opt_timeout, opt_options) {};


