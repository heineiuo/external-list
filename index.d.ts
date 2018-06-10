// Type definitions for external-list
// Project: external-list
// Definitions by: Zhuang Zejin <https://github.com/heineiuo>

export default new class ExternalList {
  [moduleName: string]: {
    commonjs: string,
    commonjs2?: string,
    root?: string
    amd?: string
  }
}