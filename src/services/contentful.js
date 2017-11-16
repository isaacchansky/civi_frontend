import {createClient} from 'contentful'
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'fc1x6iea71dw',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '07bc0b62073f53097e559535a7ebe902aa6626d169068a3dd7c9161c6d7ac33f'
})

export default client
