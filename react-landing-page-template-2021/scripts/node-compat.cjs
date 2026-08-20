// Next.js 12 still expects SlowBuffer, which was removed from newer Node.js versions.
const buffer = require('buffer');

if (!buffer.SlowBuffer) {
  buffer.SlowBuffer = buffer.Buffer;
}
