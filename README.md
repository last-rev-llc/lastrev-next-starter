# Last Rev Next Starter

## Special components

- [Asset](src/components/Asset/Asset.js) - Displays a media asset from contentful. Please see the [AssetParser in the Last Rev Adapter package](https://github.com/last-rev-llc/lastrev-toolkit/blob/master/packages/lastrev-adapter-contentful/src/assetParser/assetParser.ts) for the expected shape. **Note**: items that have gone through the adapter will already have been parsed to fit this model and no further manipulation should be necessary.
- [ContentModule](src/components/ContentModule/ContentModule.js) - This is a content lookup. Pass in the `contentTypeId` and `fields` of a content item and it will use the mapping at `src/buildArtifacts/mapping` (auto-generated with [lr-prefetch](https://github.com/last-rev-llc/lastrev-toolkit/tree/master/packages/lastrev-build-prefetch-content)) to determine the component to render. This is used on general pages as well as within the [PreviewWrapper](src/components/PreviewWrapper/PreviewWrapper.js).
- [ElementLink](src/components/ElementLink/ElementLink.js) - This component renders an ElementLink content item, or can be used to display a link extracted from other info on the page. Please see the [LinkParser inthe Last Rev Adapter package](https://github.com/last-rev-llc/lastrev-toolkit/blob/master/packages/lastrev-adapter-contentful/src/linkParser/linkParser.ts) for the expected shape. **Note**: items that have gone through the adapter will already have been parsed to fit this model and no further manipulation should be necessary. The only exceptions to this would be if you are wrapping something in a link that is not an elementLink content item, or if you want to generate a nested slug hierarchy that is context dependent (such as `/course/[courseSlug]/topics/[topicSlug]`).
- [ErrorBoundary](src/components/ErrorBoundary/ErrorBoundary.js) - limits a component's error state to the defined boundary. Useful to allow the rest of the site to render when a sub-component fails.
- [Head](src/components/ErrorBoundary/ErrorBoundary.js) - This is a wrapper for the `head` HTML element. This expects SEO data to be passed into it that is extracted from the page coontent.
- [Layout](src/components/Layout/Layout.js) - This is a wrapper for the page. Should be used on most pages. This will read in the settings (auto-generated with [lr-prefetch](https://github.com/last-rev-llc/lastrev-toolkit/tree/master/packages/lastrev-build-prefetch-content)) and also takes the extracted `seo` data that will be passed on to the `Head` component.
- [PreviewWrapper](src/components/PreviewWrapper/PreviewWrapper.js) - This component calls into [ContentModule](src/components/ContentModule/ContentModule.js) to render a preview item. It is called from the [Preview page](src/pages/preview.js).
- [RichTextParser](src/components/RichTextParser/RichTextParser.js) - Renders a rich text field from contentful.

All other components should be generated, using the [LastRev Generator](https://github.com/last-rev-llc/lastrev-generator), from the content types they are meant to render.

## Special pages

- [Preview](src/pages/preview.js) - This page takes 3 1uery parameters, `id`, `contentType`, and `locale` (optional), and renders a preview of that content item. The URL to this page should be added to Contentful in order for content entry users to be able to preview content.

## Special utilities

- [extractSeoOrDefault](src/utils/extractSeoOrDefault.js) - This utility will extract the seo field from page data, if it exists, and return that, or default values can be used here instead. In the future, we should pull from global settings for a "defaultSeo" field and use that as the fallback.
- [sidekick](src/utils/sidekick.js) - Adds the [Contentful Sidekick](https://github.com/last-rev-llc/contentful-sidekick) to an html element. Pass in the `_id` of the content item and the field name of the field that is being rendered.

## Tooling and configuration

- [LastRev Generator](https://github.com/last-rev-llc/lastrev-generator) - Generates component scaffolding based on contentType fields. Useful for getting a project up and running very quickly.
- [LastRev Contentful Integration](https://github.com/last-rev-llc/lastrev-toolkit/tree/master/packages/lastrev-integration-contentful) - Frequently used functions to query Contentful. Can be used with or without the adapter (see below).
- [LastRev Contentful Adapter](https://github.com/last-rev-llc/lastrev-toolkit/tree/master/packages/lastrev-adapter-contentful) - Converts the data that comes from contentful into the flattened shape shich is expected by the components. Eliminates the need to parse fields out in each component. It can also generate dynamic URLs based on a config passed to it using [.lastrevrc](.lastrevrc) (see below).
- [LastRev Content Prefetcher](https://github.com/last-rev-llc/lastrev-toolkit/tree/master/packages/lastrev-build-prefetch-content) - Prefetches useful data in order to save build time. Will also generate component mappings and locale data.
- [.lastrevrc](.lastrevrc) - This is the config file, in JSON format, that configures the tools listed above. See the one in this project for an example oof all the options.

---

OLD below

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
