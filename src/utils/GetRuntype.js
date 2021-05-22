module.exports = function getRunType () {
    const arg = process.argv.find(arg => arg.includes('runtype')) || ''
    return arg.replace('--runtype=', '')
}
