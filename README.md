# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Store хранит все редусеры:

import { createStore } from 'redux';
import reducer from "./reducer";

const store = createStore(
reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

а каждый редусер имеет свой state:

let lastId = 0;

export default function reducer(state = [], action) {
switch (action.type) {
case actions.TASK_ADD:
    return [...state, {
                       id: ++lastId,
                       title: action.payload.title,
                       completed: false,
                      }
           ];

    case actions.TASK_REMOVE:
      return state.filter(task => action.payload.id !== task.id);

    default:
      return state;
}

### Разница между shallow и mount

Shallow генерирует более поверхностное представление объекта.

Пример представления Shallow (Example.shallow.spec.js), как бы на __1 один уровень__. В примере ниже __компонент FormCheck не отрендерен. Просто обозначен.__:

````javascript
 PASS  src/components/Example.shallow.spec.js
  ● Console

    console.log src/components/Example.shallow.spec.js:24
      <ListGroupItem className={false} variant={[undefined]} active={false} disabled={false}>
        <FormCheck id={100} type="checkbox" label="100. Task 1" checked={false} onChange={[Function: onChange]} />
        <div className="list-group-item-actions">
          <span onClick={[Function: onClick]}>
            Подробнее
          </span>
        </div>
        <div className="list-group-item-actions">
          <span onClick={[Function: onClick]}>
            Удалить
          </span>
        </div>
      </ListGroupItem>
````

Пример представления Mount (Example.mount.spec.js). __Компонент FormCheck(Task.js) отрендерен полностью.__:

````javascript
 PASS  src/components/Example.mount.spec.js
  ● Console

    console.log src/components/Example.mount.spec.js:24
    <Task task={{...}}>
    <ListGroupItem className={false} variant={[undefined]} active={false} disabled={false}>
      <ForwardRef as="div" onClick={[Function (anonymous)]} className="list-group-item" disabled={false}>
        <div disabled={false} onClick={[Function (anonymous)]} className="list-group-item">
		  <FormCheck id={100} type="checkbox" label="100. Task 1" checked={false} onChange={[Function: onChange]}>
			<div style={[undefined]} className="form-check">
			  <FormCheckInput checked={false} onChange={[Function: onChange]} type="checkbox" isValid={false} isInvalid={false} isStatic={false} disabled={false} as="input">
				<input checked={false} onChange={[Function: onChange]} disabled={false} type="checkbox" id={100} className="form-check-input" />
			  </FormCheckInput>
			  <FormCheckLabel title="">
				<label title="" htmlFor={100} className="form-check-label">
				  100. Task 1
				</label>
			  </FormCheckLabel>
           </div>
		 </FormCheck>
         <div className="list-group-item-actions">
            <span onClick={[Function: onClick]}>
			  Подробнее
			</span>
		 </div>
		 <div className="list-group-item-actions">
		   <span onClick={[Function: onClick]}>
		     Удалить
	       </span>
	     </div>
       </div>
      </ForwardRef>
  </ListGroupItem>
  </Task>    
````