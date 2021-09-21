#!/bin/bash
set -euxo pipefail

echo "Configuring Production Build Enivornment...."
set +a 
export CI=''
set -a

yarn install --frozen-lockfile || yarn install
npx craco build

echo "Production deployment build successful"
