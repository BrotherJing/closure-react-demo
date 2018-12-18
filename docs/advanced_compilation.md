## Known advanced compilation issues

When using react with closure compiler we found some issues. Following is a list of these issues and how we get around them. For other common issues related to material components, see the convension guide below.

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

## Convention guide

Following are some points to note when you convert a react component to closure compatible one.

#### Avoid importing re-exported modules

This syntax is heavily used in the original code. For example:
```javascript
// list/index.js
import {MDCListFoundation} from '@material/list/dist/mdc.list';
```
But closure compiler does not recognize it. We should directly import the module from where it's first exported:
```javascript
import MDCListFoundation from '@material/list/foundation';
```

#### defaultProps

We need to add `@nocollapse` annotation to defaultProps of each component. Ohterwise they will be flatten during advanced compilation, and then unused props will be removed.
```javascript
// list/index.js
/**
 * @nocollapse
 */
List.defaultProps = {
  className: '',
  children: [],
  nonInteractive: false,
  dense: false,
  avatarList: false,
  twoLine: false,
  singleSelection: false,
  selectedIndex: -1,
  handleSelect: () => {},
  wrapFocus: true,
  'aria-orientation': VERTICAL,
};
```

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