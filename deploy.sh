#!/usr/bin/env bash

docker network create bilva || true

docker rm -f bilva_server || true
docker run -itd -p 8080:8080 --network bilva --name bilva_server pavishreyspkps/bilva_server:latest

docker rm -f bilva || true
docker run -itd -p 80:80 -p 443:443 --network bilva --name bilva pavishreyspkps/bilva:latest
