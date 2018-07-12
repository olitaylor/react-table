# react-table-component
 
> Simple table component that takes an array of table columns and data to render.

#### NPM
```bash
$ npm install dynamic-react-table
```

Register the component

```js
import table from 'dynamic-react-table';
```

Basic markup should look like this

```js
<Table 
  head={ tableProps.tableHeadings } 
  data={ tableProps.tableContent }
  placeholder={ tableProps.placeholder } 
  parentClass={ tableProps.parentClass }/>
```

Props

```js
const tableProps = {
  tableHeadings: ['Make', 'Model', 'Color', 'Engine'],
  tableContent: [
    { make: 'Ford', model: 'Mustang', engine: '5L', color: 'Yellow' },
    { make: 'Aston Martin', model: 'DB9', color: 'Silver' },
    { make: 'Dodge', model: 'Charger', color: 'Red' }
  ],
  parentClass: "table-test",
  placeholder: "-"
};
```

## TODO
- Column sorting, 
- Default styling with no-style option
- Publish to npm with better package name.
