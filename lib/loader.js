const fs = require('fs-extra')
const { color } = require('./color')

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
	console.log('𖧷', '[',color('INFO','blue'),']','Starting Your Bot...')
function nocache(module, cb = () => { }) {
    console.log('𖧷', '[',color('MODULE', 'deeppink'),']', color(`${module} Dipantau oleh FixMoodX - YT ✔︎`));
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
