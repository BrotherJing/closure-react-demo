#!/bin/sh

# closure deps plugin can't parse jsx,
# so we transpile the files and put in ./gen
./node_modules/.bin/babel src/js --out-dir gen

# make deps for the ./gen directory
./node_modules/google-closure-deps/bin/closuremakedeps.js \
    --no-validate \
    --root gen \
    --closure-path './node_modules/google-closure-library/closure/goog' \
    > dist/deps.js
    
# there is no root_with_prefix option in deps plugin, convert the path manually
sed -i'.bak' -e 's/gen/src\/js/g' dist/deps.js