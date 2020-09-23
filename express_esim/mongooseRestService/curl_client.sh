#!/bin/bash

PORT=3300
curl -X DELETE http://localhost:$PORT/api/events
curl -X POST -i -H "Content-Type: application/json" --data '{"name":"Football Game","location":"Tampere"}' http://localhost:$PORT/api/events
curl -X POST -i -H "Content-Type: application/json" --data '{"name":"Rock Concert","location":"Jyväskylä"}' http://localhost:$PORT/api/events
curl -X POST -i -H "Content-Type: application/json" --data '{"name":"Node Conference","location":"Lappeenranta"}' http://localhost:$PORT/api/events
curl -X GET http://localhost:$PORT/api/events