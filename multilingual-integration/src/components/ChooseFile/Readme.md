ChooseFile

```jsx inside Markdown
import mockData from './__test__/ChooseFile.mock.json'
const changeHandler = () => setPopup()

;<ChooseFile
	name={mockData.name}
	accept={mockData.accept}
	handleChange={changeHandler}
/>
```
