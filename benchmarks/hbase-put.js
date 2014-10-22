

var hbase = require('../lib/index.js');

var count = 0;
var step = 1;
var id = 0;
var data = ' ';


var r = 0;
var e = 0;
var t = Date.now();
var mem = 0;

var client = new hbase.Client({
  'host': '192.168.48.248',
  'port': 8080
});


function cancel() {
  e += 1;
  complete();
}


function complete() {
  mem += process.memoryUsage().heapUsed/1024/1024;
  if ((r += 1) === count) {
    console.log('[HBASE] | R:', r, ' | E:', e, ' | T:', Date.now() - t,
        ' | M:', (Math.round(mem/r*10)/10));
    run();
  }
}


function exec() {
  client.getRow('test', 'test_row' + id.toString()).put('test_column_family:' +
      id.toString(), data, complete, cancel);
  id += 1;
}


function run() {
  r = 0;
  e = 0;
  t = Date.now();
  mem = 0;
  count += step;

  if (count / step === 10) {
    step *= 10;
  }

  for (var i = 0; i < count; i += 1) {
    exec();
  }
}

run();
