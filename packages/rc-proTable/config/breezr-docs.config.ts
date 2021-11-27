import type { IParams } from '@alicloud/console-toolkit-preset-docs'
import path from 'path'

module.exports = {
  presets: [
    [
      require.resolve('@alicloud/console-toolkit-preset-docs'),
      {
        consoleOSId: 'console-components-protable-docs',
        externals: [
          {
            moduleName: '@alicloud/console-components-protable',
            usePathInDev: path.resolve(__dirname, '../src/index'),
          },
          {
            moduleName: '@alicloud/console-components',
            usePathInDev: path.resolve(__dirname, './configedComponents.tsx'),
          },
          'styled-components',
        ],
        demoWrapperPath: path.resolve(__dirname, 'demoWrapper.tsx'),
        demoOptsPath: path.resolve(__dirname, 'demoOpts.ts'),
      } as IParams,
    ],
  ],
}
