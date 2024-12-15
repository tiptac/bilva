#!/usr/bin/env bash

pnpm build

docker build . -f Dockerfile.server -t pavishreyspkps/bilva_server:latest

docker build . -f Dockerfile.client -t pavishreyspkps/bilva:latest
