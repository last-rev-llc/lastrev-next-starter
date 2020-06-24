# Using bit.dev

## Best Practices

Best practices for creating reusable components: https://github.com/Tallyb/reusable-components-styleguide

## Adding a component

1. Always add components bottoms-up, meaning that if there are dependencies on other components, add those first
2. Check package.json and verify that all dependencies that are expected to be used in the consuming app (such as next.js and react.js) are listed as peer dependencies. You can add them in as dev dependincies as well so that they will be installed when running `npm install`.
3. If one does not already exist, create a `README.md` file. This file should, at aminimum, explain what the component does, and list the properties of the component (name, required, type)
4. If you have not already done so, install the bit cli:

```bash
npm install bit-bin -g
```

5. Add the component (this is a work in progress until I can figure out a better way of doing this). You want to add the component directory, while excluding story files or anything else not needed, and letting bit know which file is the tests file:

```bash
bit add src/components/Foo --exclude src/components/Foo/Foo.story.js --tests src/components/Foo/Foo.test.js
```

6. Build

```bash
bit build
```

7. tag it

```bash
bit tag --all 0.0.1
```

8. export it. You will want to export to the proper collection, based on what type of module it is.

```bash
bit export lastrev.components
```

## Making changes to components

Once a component is in bit.dev, you can make changes and update the version with the following steps

1. Make the necessary changes
2. run the tests

```bash
bit test lastrev.components/foo
```

3. Tag the component. This will auto increment the patch version.

```bash
bit tag lastrev.components/foo
```

4. Export it

```bash
bit export
```
