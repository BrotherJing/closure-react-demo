module.exports = function(api) {
    // If testing for a specific env, we recommend specifics to avoid instantiating a plugin for
    // any possible NODE_ENV value that might come up during plugin execution.
    api.cache(() => process.env.NODE_ENV === "production");

    const presets = ["@babel/react"];
    const plugins = [
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-destructuring",
    "@babel/plugin-transform-computed-properties",
    ];
  if (!api.env('production')) {
    // for dev build for ie/edge
    presets.push("@babel/preset-env");

    // closure compiler now support object rest/spread, so we don't need this for prod
    plugins.push("@babel/plugin-proposal-object-rest-spread");
  } else {
    // for production, remove proptypes
        plugins.push('transform-react-remove-prop-types');
    }
    return {
        presets,
        plugins
    };
}