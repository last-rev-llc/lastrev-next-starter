# LastRev ElementLink Component

This component displays a link, either an internal link (pointing to an internal content item), an externalLink, or an anchorTag (pointing to an anchor on the page).

## Props

- `className` [Optional] - Additional classnames to apply to the component
- `isInternal` [Required] - a boolean value that lets the component know whether to render an internal link or a standard anchor tag
- `href` [Required] - the href in the link
- `as` [Optional] - if isInternal=true, this should be provided. See (Next/Link)[https://nextjs.org/docs/api-reference/next/link] for documentation
- `linkText` [Required] - The text to display in the link
- `target` [Optional] - The optional target to use for the link
- `icon` [Optional] - An optional text string that will apply a classname to show an icon
