## Browser compatibility issues

We solved some issues related to browser compatibility. Here's I list them for reference.

### IE object doesn't support property or method 'from'

Normally we need to import some polyfill. But closure compiler provide a flag: `rewrite_polyfills`. Just add this in compilation arguments:
```
rewrite_polyfills: true
```
This will increase the bundle size by 7kb(advanced mode).