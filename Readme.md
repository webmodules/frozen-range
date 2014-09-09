# frozen-range

Store DOM ranges in a non-live representation for later use.

This module works by [storing the DOM tree paths](https://github.com/webmodules/dom-path) to the `start` and `end` containers, as well as the offset values of the range.

## Usage

Given a `Range` and a `Node`:

```javascript
// Freeze
var frozen = new FrozenRange(range, el);

// Thaw
range = frozen.thaw(el);
```

If the content of the reference Node provided changes the resulting Range will be innacurate.
