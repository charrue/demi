const { switchVersion } = require('./utils')

const pkg = process.argv[2]

if (pkg === "charrue") {
  switchVersion("charrue")
  console.log(`[@charrue/demi] Switched for @charrue/vump`)
} else if (pkg === "vue") {
  switchVersion("vue")
  console.log(`[@charrue/demi] Switched for vue`)
} else {
  console.warn(`[@charrue/demi] expecting "charrue" or "vue" but got "${version}"`)
  process.exit(1)
}
