#!/usr/bin/env bash

docker push pavishreyspkps/bilva_server:latest
docker push pavishreyspkps/bilva:latest

docker build . -f Dockerfile.server -t pavishreyspkps/bilva_server:latest

docker build . -f Dockerfile.client -t pavishreyspkps/bilva:latest
