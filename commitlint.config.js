module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新的功能点、新的需求
        'fix', // 修复的Bug：现网发散Bug、测试阶段的Bug、验收阶段的Bug
        'docs', // 只是修改了文档：注释、README.md等
        'style', // 不影响代码功能的修改：CSS样式、代码格式化等
        'refactor', // 代码更改既不修复错误也不添加功能
        'perf', // 代码更改可以提高性能
        'test', // 添加缺失测试或更正现有测试
        'build', // 影响构建系统或外部依赖项的更改：build.gradle、 packagejson、 Podfile等
        'ci', // Ci配置文件和脚本的更改：Jenkinsfile等
        'revert', // 代码回退提交更改
        'other' // 除以上所有类型之外的提交更改
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
