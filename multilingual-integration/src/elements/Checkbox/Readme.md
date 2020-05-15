Checkbox

```jsx inside Markdown
import mockData from './__test__/Checkbox.mock.json'
const [isChecked, setIsChecked] = React.useState(false)
const changeHandler = e => setIsChecked(e.target.checked)
;<Checkbox
	label={mockData.label}
	name={mockData.name}
	id={mockData.id}
	isChecked={isChecked}
	handleChange={e => changeHandler(e)}
/>
```
