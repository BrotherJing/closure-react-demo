#!/bin/sh

python ./node_modules/google-closure-library/closure/bin/build/depswriter.py \
    --root_with_prefix="src/js ../../../../src/js" \
    > dist/deps.js