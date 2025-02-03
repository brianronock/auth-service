export default {
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    testEnvironment: "node",
    //extensionsToTreatAsEsm: [".js"]
    "moduleNameMapper": {
        "/^(\.{1,2}\/.*)\.js$/": "$1"
      },
      "resolver": undefined
  };