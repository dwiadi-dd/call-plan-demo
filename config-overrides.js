const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@": ".",
  })(config);

  return config;
};
