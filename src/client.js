import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ojdzfdtu',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skiTeFkHvSXpd6u5icLHFIYMH4QdXd4c4Sm5uAKcPCV4xIHhDHQjVO5TSkJZ9HOgTsEcgmbJILpb1qrzuzKwCOOwNShJwwXQ2ynU9KXEe9UorvvISX3F9fh1bxWC2PWviL6OGDPlxzi7YPV9u25gL77vGZXurs0k0a4bVlO8LcoA6GjnSVdu'
})
const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
