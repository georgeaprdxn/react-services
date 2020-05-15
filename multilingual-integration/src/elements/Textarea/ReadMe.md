Textarea

```jsx inside Markdown
const [val, setVal] = React.useState('Some text')
const changeHandler = e => setVal(e.target.value)
;<Textarea row={3} val={val} handleChange={e => changeHandler(e)} />
```
