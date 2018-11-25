## Convention guide

#### DOM attribute warning

> Warning: React does not recognize the `className` prop on a DOM element.

The keys of `possibleStandardNames` are renamed after advanced compilation. But in `warnUnknownProperties` it's accessed with string properties. However this check is only called when using react development build.

#### production build

```javascript
/**
 * React attribute not included in react.ext.js
 */
var ReactAttribute = {};
ReactAttribute.onSelect;
```

After adding this extern, we can use production build of react without error. I forget how I found this...

#### class properties

```javascript
["@babel/plugin-proposal-class-properties", { "loose": true }]
```

In some react component, the class properties syntax is used. For example in `input.js`:
```javascript
isBadInput = () => this.inputElement_.current.validity.badInput;
```
If we don't add `{"loose": true}`, babel will transpile this into:
```javascript
constructor() {
    Object.defineProperty(this, "isBadInput", {
        ...
    });
}
```

#### defaultProps

We need to add `@nocollapse` annotation to defaultProps of each component. Ohterwise they will be flatten, and then unused props will be removed.

#### externs for props

In some component, object rest syntax is used. For example in `ListItem.js`:
```javascript
const {
      /* eslint-disable */
      className,
      classNamesFromList,
      childrenTabIndex,
      shouldFocus,
      shouldFollowHref,
      shouldToggleCheckbox,
      /* eslint-enable */
      attributesFromList,
      children,
      ...otherProps
    } = this.props;
```
When babel transpile this, it will use string property, thus fail in advanced compilation. Currently we solve this by preventing these keys being renamed.