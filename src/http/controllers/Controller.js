const {Router} = require('express')

/*
|--------------------------------------------------------------------------
| Base Controller
|--------------------------------------------------------------------------
|
| Here we will set up the base controller instance. This will house all
| shared functionality among all the controllers.
|
*/

module.exports = class Controller {
    constructor () {
        this.router = Router()
    }
}
