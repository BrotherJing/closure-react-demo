module.exports = function(api) {
    // If testing for a specific env, we recommend specifics to avoid instantiating a plugin for
    // any possible NODE_ENV value that might come up during plugin execution.
    api.cache(() => process.env.NODE_ENV === "production");

    const presets = ["@babel/react"];
    const plugins = [
        "@babel/plugin-proposal-object-rest-spread",
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        "@babel/plugin-transform-destructuring"
    ];
    return {
        presets,
        plugins
    };
}