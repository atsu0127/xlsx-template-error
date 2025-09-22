# xlsx-template-error

Minimal reproduction repository for a bug in [xlsx-template](https://www.npmjs.com/package/xlsx-template).

## Bug

When substituting an image on a worksheet that contains any **shape** (rectangle, oval, etc.), the following error occurs:

```
TypeError: Cannot read properties of null (reading 'asText')
```

This makes it impossible to embed images on sheets that include shapes.

## Reproduction Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/atsu0127/xlsx-template-error.git
   cd xlsx-template-error
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the script:

   ```bash
   node index.js
   ```
