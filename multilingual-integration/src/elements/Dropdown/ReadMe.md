Dropdown

```jsx inside Markdown
import mockData from './__test__/Dropdown.mock.json'
const [selectedOption, setSelected] = React.useState(false)
const changeHandler = selectedOption => setSelected(selectedOption)
;<Dropdown
	options={mockData.options}
	selectedOption={selectedOption}
	handleChange={selectedOption => changeHandler(selectedOption)}
/>
```
