#!/bin/bash

#PREHEAT_JS_MODULE=spreadsheet-forneus-preheat-js
#
#pushd "../${PREHEAT_JS_MODULE}"
#
#if ! mvn clean package; then
#    exit 1
#fi
#
#popd
#
#cp ../${PREHEAT_JS_MODULE}/target/${PREHEAT_JS_MODULE}.jar ./
#
#java -jar ${PREHEAT_JS_MODULE}.jar
#
#rm ${PREHEAT_JS_MODULE}.jar

COMPILER_MODULE=spreadsheet-forneus-optimizers/react-closure-compiler

pushd "../${COMPILER_MODULE}"

#if ! mvn clean package; then
#    exit 1
#fi

popd

COMPILER=../${COMPILER_MODULE}/target/compiler.jar

BT_SOURCE=$(readlink -f src/main/webapp/lib/wap/bt)
COLLABO_SOURCE=$(readlink -f src/main/webapp/lib/wap/collabo)
FILE_NAME=3d5d2460-d5a3-11e8-958b-024279e2cfea
APP_CODE="ess"

# start compiling
# --externs src/main/webapp/js/externs/hack-react.js \
java -jar ${COMPILER} \
    --compilation_level=ADVANCED \
    --language_in=ECMASCRIPT_2015 \
    --language_out=ES5 \
    --strict_mode_input=false \
    --dependency_mode=STRICT \
    --module_resolution=NODE \
    --process_common_js_modules \
    --output_manifest=manifest.MF \
    \
    --externs src/main/webapp/js/externs/react.ext.js \
    --externs src/main/webapp/js/externs/react-dom.ext.js \
    \
    --js node_modules/react-dom/package.json \
    --js "node_modules/react-dom/**.js" \
    \
    --js node_modules/react/package.json \
    --js "node_modules/react/**.js" \
    \
    --js node_modules/fbjs/package.json \
    --js "node_modules/fbjs/lib/**.js" \
    \
    --js node_modules/object-assign/package.json \
    --js "node_modules/object-assign/**.js" \
    \
    --js node_modules/prop-types/package.json \
    --js "node_modules/prop-types/**.js" \
    \
    --js "src/main/webapp/js/**.js" \
    --js src/main/webapp/js/properties.js \
    --js "!src/main/webapp/js/externs/**.js" \
    --js "src/main/webapp/lib/closure-library/closure/goog/**.js" \
    --js "src/main/webapp/lib/closure-library/third_party/**.js" \
    --js "src/main/webapp/lib/openlayers/**.js" \
    --js "${BT_SOURCE}/**.js" \
    --js "${COLLABO_SOURCE}/**.js" \
    --js src/main/webapp/static/tmp/${FILE_NAME}.main.js \
    --js "!src/**_test.js" \
    \
    --js_output_file=src/main/webapp/static/dynamic_resources/${FILE_NAME}.js \
    --create_source_map=src/main/webapp/static/dynamic_resources/${FILE_NAME}.js.map \
    --source_map_location_mapping "node_modules|../../node_modules" \
    --source_map_location_mapping "src/main/webapp/js|../../js" \
    --source_map_location_mapping "src/main/webapp/lib|../../lib" \
    --source_map_location_mapping "${BT_SOURCE}|../../lib/wap/bt" \
    --source_map_location_mapping "${COLLABO_SOURCE}|../../lib/wap/collabo" \
    --output_wrapper="%output%//# sourceMappingURL=./${FILE_NAME}.js.map" \
    --define="goog.json.USE_NATIVE_JSON=true" \
    --define="process.env.NODE_ENV='development'" \
    \
    --entry_point=goog:process.env \
    --entry_point=goog:main
