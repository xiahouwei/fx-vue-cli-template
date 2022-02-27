module.exports = {
    prompts: {
        name: {
            type: 'input',
            name: 'name',
            message: 'Project name'
        },
        description: {
            type: 'input',
            name: 'description',
            message: 'Project description'
        },
        author: {
            type: 'input',
            name: 'author',
            message: 'Project author'
        },
        router: {
            type: 'confirm',
            message: 'use vue-router((路由功能模块)?',
        },
        i18n: {
            type: 'confirm',
            message: 'use vue-i18n(国际化功能模块)?',
        },
        fxService: {
            type: 'confirm',
            message: 'use fx-service(风行http请求功能模块)?',
        },
        fxLogger: {
            type: 'confirm',
            message: 'use fx-logger(风行日志功能模块)?',
        },

    }
}