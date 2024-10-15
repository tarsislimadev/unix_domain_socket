import { PORT } from '../config/index.js'

import { createServer } from 'net'

const server = createServer()

server.on('data', (data) => console.log('data', data))

server.listen(PORT, () => console.log(`listening on port ${PORT}`))
