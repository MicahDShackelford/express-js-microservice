const Express = require('express')

module.exports = class Api {
    constructor (app) {
        this.router = Express.Router()
        app.use('/api', this.router)
        this.router.use(Express.json())
    }

    async boot () {
        this.router.get('/example-route', await this.apiMethod('ExampleController.index'))
    }

    /**
     * @param slug Api Method slug with format: [CONTROLLER_NAME].[METHOD_NAME]
     * @returns The requested method
     */
    async apiMethod (slug) {
        const split = slug.split('.')
        const controllerName = split[0]
        const methodName = split[1]

        const controllerImport = await import(`./http/controllers/${controllerName}.js`)
        const Controller = new controllerImport.default() // eslint-disable-line

        return Controller[methodName]
    }
}
