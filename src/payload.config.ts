import path from 'path'
import { buildConfig } from 'payload/config'
// import { webpackBundler } from '@payloadcms/bundler-webpack'
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { slateEditor } from '@payloadcms/richtext-slate'
// import path from 'path'
// import { Users } from './collections/Users'
import dotenv from 'dotenv'
// import { Products } from './collections/Products/Products'
// import { Media } from './collections/Media'
// import { ProductFiles } from './collections/ProductFile'
// import { Orders } from './collections/Orders'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
//   collections: [Users, Products, Media, ProductFiles, Orders], 
  routes: {
    admin: '/sell',
  },
  admin: {
    user: 'users',
    // bundler: webpackBundler(),
    meta: {
      titleSuffix: '- DigitalHippo',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})

function mongooseAdapter(arg0: { url: string }): (args: { payload: import("payload/dist/payload").Payload }) => import("payload/dist/database/types").BaseDatabaseAdapter {
    throw new Error('Function not implemented.')
}
function slateEditor(arg0: {}): import("payload/dist/exports/types").RichTextAdapter<any, any, any> {
    throw new Error('Function not implemented.')
}

