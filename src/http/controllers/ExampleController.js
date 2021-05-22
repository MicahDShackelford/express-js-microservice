const Controller = require('./Controller.js')

module.exports = class ExampleController extends Controller {
    constructor () { // eslint-disable-line
        super()
    }

    index (request, response) {
        response.send('Hello World')
    }
}
