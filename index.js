// Go to nodejs.dev to explore more
const fs = require('fs')
const replaceFrom = 'harry'

const replaceWith = 'kunal'
const preview = false;
const path = require('path')
const folder = __dirname
try {
    fs.readdir(folder, (err, data) => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];

            let oldFile = path.join(folder, item);
            let newFile = path.join(folder, item.replace(replaceFrom, replaceWith))
            if (!preview) {
                fs.rename(oldFile, newFile, () => { })
            } else {
                if ('data/' + item !== newFile) {
                    console.log(`${item} will be renamed to ${newFile}`);
                }
            }
        }
    })
} catch (err) {
    console.log(err)
}