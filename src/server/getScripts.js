const fs = require('fs')

export default function () {
  const data = fs.readdirSync('./public/js')

  return data
    ?.filter((it) => it.endsWith('.js'))
    .map((path) => `<script src="./js/${path}"></script>`)
    .join('\n')
}
