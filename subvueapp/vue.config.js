/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-09-16 09:48:19
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-09-16 14:05:32
 */
const { name } = require("./package");
module.exports = {
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    hot: true,
    // historyApiFallback: true,
    host: "127.0.0.1",
    port: 9091,
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
