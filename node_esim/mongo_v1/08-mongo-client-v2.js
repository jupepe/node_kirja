const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/nodedemos'

// Connection to devices collection and delete all data from it
mongoClient.connect(url, {
        useNewUrlParser   : true,
        useUnifiedTopology: true
    },
    (err, db) => {
        if (err) {
            console.log('ERROR:', err)
        } else {
            console.log('CONNECTED: ', url)

            const demoDb = db.db('nodedemos')

            const collection = demoDb.collection('devices')

            // deleteMany deletes all documents from the collection.
            collection.deleteMany({}, (err, results) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(results)
                    }
                    db.close()
                }
            )
        }
    }
)

/*

node 08-mongo-client-v2.js 
CONNECTED:  mongodb://localhost:27017/nodedemos
CommandResult {
  result: { n: 5, ok: 1 },
  connection: Connection {
    _events: [Object: null prototype] {
      error: [Function],
      close: [Function],
      timeout: [Function],
      parseError: [Function],
      message: [Function]
    },
    _eventsCount: 5,
    _maxListeners: undefined,
    id: 0,
    options: {
      host: 'localhost',
      port: 27017,
      size: 5,
      minSize: 0,
      connectionTimeout: 30000,
      socketTimeout: 360000,
      keepAlive: true,
      keepAliveInitialDelay: 300000,
      noDelay: true,
      ssl: false,
      checkServerIdentity: true,
      ca: null,
      crl: null,
      cert: null,
      key: null,
      passphrase: null,
      rejectUnauthorized: false,
      promoteLongs: true,
      promoteValues: true,
      promoteBuffers: false,
      reconnect: true,
      reconnectInterval: 1000,
      reconnectTries: 30,
      domainsEnabled: false,
      legacyCompatMode: false,
      localThresholdMS: 15,
      serverSelectionTimeoutMS: 30000,
      heartbeatFrequencyMS: 10000,
      minHeartbeatFrequencyMS: 500,
      cursorFactory: [Function: Cursor],
      emitError: true,
      monitorCommands: false,
      servers: [Array],
      caseTranslate: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'nodedemos',
      retryWrites: true,
      useRecoveryToken: true,
      readPreference: [ReadPreference],
      promiseLibrary: [Function: Promise],
      compression: [Object],
      bson: BSON {}
    },
    logger: Logger { className: 'Connection' },
    bson: BSON {},
    tag: undefined,
    maxBsonMessageSize: 67108864,
    port: 27017,
    host: 'localhost',
    socketTimeout: 360000,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    connectionTimeout: 30000,
    responseOptions: { promoteLongs: true, promoteValues: true, promoteBuffers: false },
    flushing: false,
    queue: [],
    writeStream: null,
    destroyed: false,
    hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c',
    workItems: [],
    socket: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'localhost',
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype],
      _eventsCount: 5,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: true,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      timeout: 360000,
      [Symbol(asyncId)]: 12,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: Timeout {
        _idleTimeout: 360000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 176,
        _onTimeout: [Function: bound ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(asyncId)]: 21,
        [Symbol(triggerId)]: 12
      },
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    buffer: null,
    sizeOfMessage: 0,
    bytesRead: 0,
    stubBuffer: null,
    ismaster: {
      ismaster: true,
      maxBsonObjectSize: 16777216,
      maxMessageSizeBytes: 48000000,
      maxWriteBatchSize: 100000,
      localTime: 2019-10-25T09:26:37.254Z,
      logicalSessionTimeoutMinutes: 30,
      minWireVersion: 0,
      maxWireVersion: 6,
      readOnly: false,
      ok: 1
    },
    lastIsMasterMS: 6
  },
  message: BinMsg {
    parsed: true,
    raw: <Buffer 2d 00 00 00 c8 01 00 00 01 00 00 00 dd 07 00 00 00 00 00 00 00 18 00 00 00 10 6e 00 05 00 00 00 01 6f 6b 00 00 00 00 00 00 00 f0 3f 00>,
    data: <Buffer 00 00 00 00 00 18 00 00 00 10 6e 00 05 00 00 00 01 6f 6b 00 00 00 00 00 00 00 f0 3f 00>,
    bson: BSON {},
    opts: { promoteLongs: true, promoteValues: true, promoteBuffers: false },
    length: 45,
    requestId: 456,
    responseTo: 1,
    opCode: 2013,
    fromCompressed: undefined,
    responseFlags: 0,
    checksumPresent: false,
    moreToCome: false,
    exhaustAllowed: false,
    promoteLongs: true,
    promoteValues: true,
    promoteBuffers: false,
    documents: [ [Object] ],
    index: 29,
    hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c'
  },
  deletedCount: 5
}



*/