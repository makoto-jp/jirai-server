/**
 * 地雷サーバ設定を保持するモジュール。
  */

import fs from 'fs';

/**
 * @typedef ServerConfig 
 * @property {String} address default: "127.0.0.1"
 * @property {Number} port default: 3000
 */

/**
 * @typedef DataSourceConfig
 * @property {String} type
 */

/**
 * @typedef Config
 * @property {ServerConfig} server
 * @property {DataSourceConfig} datasource
 */

/** @type {Config} */
const config = JSON.parse(fs.readFileSync('./config.json'));

if (!config.datasource.type) {
  throw new Error('datasource.type is not defined in config.json');
}

// set default values
if (!config.server.address) {
  config.server.address = "127.0.0.1";
}
if (!config.server.port) {
  config.server.port = 3000;
}

export default config;