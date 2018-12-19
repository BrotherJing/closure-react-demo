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
