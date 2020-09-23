#!/bin/bash


PORT=9000
curl -X GET http://localhost:$PORT/
echo
curl -X DELETE http://localhost:$PORT/remove/fi
echo
curl -X GET http://localhost:$PORT/search?code=fi
echo
curl -X GET http://localhost:$PORT/search?code=se

