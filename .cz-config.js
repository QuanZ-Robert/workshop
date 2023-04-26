module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:      新功能' },
    { value: 'fix', name: 'fix:       修复bug' },
    { value: 'docs', name: 'docs:      文档变更' },
    { value: 'style', name: 'style:     不影响代码含义的变化(空白、格式化等)' },
    { value: 'refactor', name: 'refactor:  重构代码,既不修复错误也不添加功能' },
    { value: 'perf', name: 'perf:      性能优化' },
    { value: 'test', name: 'test:      测试相关' },
    { value: 'revert', name: 'revert:    代码回退' },
    { value: 'chore', name: 'chore:     构建过程或者辅助工具(webpack、npm)' },
    { value: 'ci', name: 'ci:        更改持续集成文件和脚本' },
    { value: 'build', name: 'build:     打包' },
  ],
  scopes: [
    ['pages', '页面相关'],
    ['components', '组件相关'],
    ['utils', '工具相关'],
    ['assets', '资源相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['config', '配置相关'],
    ['other', '其他相关'],
  ].map(([value, desc]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${desc})`,
    }
  }),
  messages: {
    type: '确保本次提交遵循规范！\n请选择提交的类型:',
    scope: '\n选择一个 scope',
    customScope: '请输入修改范围 (可选)',
    subject: '请简要描述变更 (必填)',
    body: '请详细描述变更 (可选)',
    footer: '请输入要关闭的 issue (可选)',
    confirmCommit: '确定要使用以上信息提交？(Y/n)',
  },
  allowCustomScopes: true,
  skipQuestions: ['footer'],
  subjectLimit: 72,
}
