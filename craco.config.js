const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "react-refresh/runtime": path.resolve(
        __dirname,
        "./src/custom-runtime/react-refresh-runtime.development.js"
      ),
    },
  },
};
