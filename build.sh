#!/bin/bash

# Build script that temporarily switches to Node.js 20 for compatibility
echo "Switching to Node.js 20 for build compatibility..."
source $NVM_DIR/nvm.sh
nvm use 20

echo "Running build with Node.js 20..."
NODE_OPTIONS='--experimental-json-modules' NEXT_TYPESCRIPT_DISABLE=true next build && NODE_OPTIONS='--experimental-json-modules' node ./scripts/postbuild.mjs

echo "Build completed. You can switch back to Node.js 22 with: nvm use 22"
