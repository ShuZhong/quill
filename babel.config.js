module.exports = {
  presets: [
    /* 这里的 target 设置已经移动到 package.json browserslist 字段中了 */
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 Chrome major versions',
            'last 2 Firefox major versions',
            'last 2 Safari major versions',
            'last 2 Edge major versions',
            'last 2 iOS major versions',
            'last 2 ChromeAndroid major versions',
          ],
        },
      },
    ],
  ],
};
