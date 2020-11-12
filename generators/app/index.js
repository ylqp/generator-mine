
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting(){
        // Yeoman 在询问用户环节会自动调用此方法
        // 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行询问
        return this.prompt([
            {
                type:'input',
                name:'name',
                message:'your project name',
                default:this.appname
            },
            {
                type:'input',
                name:'description',
                message:'description',
                default:""
            }
        ])
        .then(answers => {
            this.answers = answers
        })
    }
    write(){
        // // 我们这里尝试往项目目录中写入文件
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )

        // //模板文件路径
        // const tmpl = this.templatePath('bar.html')
        // //输出目标路径
        // const output = this.destinationPath('bar.html')
        // //模板数据上下文
        // const context = this.answers

        // this.fs.copyTpl(tmpl,output,context)

        //模板文件路径
        const tmpl = this.templatePath('**')
        //输出目标路径
        const output = this.destinationPath('./')
        //模板数据上下文
        const context = this.answers

        this.fs.copyTpl(tmpl,output,context)
    }
}