export const packageJson = {
  data: {
    packageJson: {
      "name": "@serverless-devs/s3",
      "version": "0.1.1-beta.11",
      "description": "Serverless devs tool, serverless developer tool, supports Alibaba cloud, AWS, azure, baidu cloud, Huawei cloud, Google cloud and Tencent cloud.",
      "homepage": "https://www.serverless-devs.com",
      "keywords": [
        "serverless",
        "alibaba",
        "tencent",
        "azure",
        "baidu",
        "huawei",
        "google",
        "function",
        "faas",
        "serverless-devs"
      ],
      "publishConfig": {
        "access": "public",
        "registry": "https://registry.npmjs.org"
      },
      "license": "Apache 2.0",
      "repository": {
        "type": "git",
        "url": "https://github.com/Serverless-Devs/Serverless-Devs"
      },
      "bugs": {
        "url": "https://github.com/Serverless-Devs/Serverless-Devs/issues"
      },
      "scripts": {
        "start": "npm run watch",
        "test": "jest --testTimeout 10000",
        "test:watch": "jest --testTimeout 10000 --watchAll",
        "format": "prettier --write src/ __tests__/**/*.test.ts",
        "watch": "npm run build -- --watch",
        "prebuild": "rm -rf node_modules && npm install --production false",
        "build": "node ./scripts/build.js",
        "pkg": "pkg bin/s --out-path releases",
        "prepublishOnly": "npm run build",
        "beta": "npm publish --tag=beta",
        "pub": "npm publish"
      },
      "main": "./lib/index.js",
      "bin": {
        "s": "bin/s"
      },
      "engines": {
        "node": ">=14.14.0"
      },
      "devDependencies": {
        "@serverless-devs/core": "^0.1.66",
        "@serverless-devs/credential": "^0.0.3",
        "@serverless-devs/engine": "^0.0.20",
        "@serverless-devs/load-application": "^0.0.8",
        "@serverless-devs/load-component": "^0.0.5",
        "@serverless-devs/logger": "^0.0.3",
        "@serverless-devs/parse-spec": "^0.0.18",
        "@serverless-devs/registry": "^0.0.4",
        "@serverless-devs/utils": "^0.0.14",
        "@types/fs-extra": "^11.0.4",
        "@types/inquirer": "^9.0.7",
        "@types/jest": "^29.5.10",
        "@types/js-yaml": "^4.0.9",
        "@types/lodash": "^4.14.202",
        "@types/node": "^20.10.3",
        "@types/semver": "^7.5.5",
        "axios": "^1.6.2",
        "boxen": "^7.1.1",
        "chalk": "^5.3.0",
        "commander": "^11.1.0",
        "dotenv": "^16.3.1",
        "dotenv-expand": "^10.0.0",
        "esbuild": "^0.19.5",
        "fs-extra": "^11.1.1",
        "global-agent": "^3.0.0",
        "inquirer": "^9.2.12",
        "inquirer-autocomplete-prompt": "^3.0.1",
        "jest": "^29.7.0",
        "js-yaml": "^4.1.0",
        "latest-version": "^7.0.0",
        "leven": "^4.0.0",
        "lodash": "^4.17.21",
        "pkg": "^5.8.1",
        "prettier": "^3.1.0",
        "prettyjson": "^1.2.5",
        "rimraf": "^5.0.5",
        "semver": "^7.5.4",
        "semver-diff": "^4.0.0",
        "table-layout": "^3.0.2",
        "ts-jest": "^29.1.1",
        "ts-node": "^10.9.1",
        "typescript": "^5.2.2"
      },
      "lint-staged": {
        "**/*.{js,jsx,ts}": "f2elint exec eslint"
      }
    }
  }
}