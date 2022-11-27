const fs = require('fs')
const path = require('path')

const dir = path.resolve(__dirname, '..', 'lib')

function copy(filename, pkg) {
  const src = path.join(dir, pkg, filename)
  const dest = path.join(dir, filename)
  let content = fs.readFileSync(src, 'utf-8')

  try {
    fs.unlinkSync(dest)
  } catch (error) { }
  fs.writeFileSync(dest, content, 'utf-8')
}

function switchPackage(pkg) {
  copy('index.js', pkg)
  copy('index.mjs', pkg)
  copy('index.d.ts', pkg)
}


module.exports.loadModule = loadModule
module.exports.switchVersion = switchPackage