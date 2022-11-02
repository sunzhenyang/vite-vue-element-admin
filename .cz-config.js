module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: '[新增功能] - 新的功能点、新的需求' },
    {
      value: 'fix',
      name: '[Bug 修复] - 修复的Bug：现网发散Bug、测试阶段的Bug、验收阶段的Bug'
    },
    { value: 'docs', name: '[文档修改] - 只是修改了文档：注释、README.md等' },
    {
      value: 'style',
      name: '[样式修改] - 不影响代码功能的修改：CSS样式、代码格式化等'
    },
    { value: 'refactor', name: '[代码重构] - 代码更改既不修复错误也不添加功能' },
    { value: 'perf', name: '[性能优化] - 代码更改可以提高性能' },
    { value: 'test', name: '[测试代码] - 添加缺失测试或更正现有测试' },
    {
      value: 'build',
      name: '[编译代码] - 影响构建系统或外部依赖项的更改：build.gradle、 packagejson、 Podfile等'
    },
    { value: 'ci', name: '[持续集成] - 更改持续集成文件和脚本：Jenkinsfile等' },
    { value: 'revert', name: '[回退更改] - 代码回退提交更改' },
    { value: 'other', name: '[其他提交] - 除以上所有类型之外的提交更改' }
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  // 跳过问题
  skipQuestions: ['footer'],
  // subject文字长度默认是72
  subjectLimit: 72
}
