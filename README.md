# NgMatSearchBar

The component creates a search-icon which expands a search-field on click. See the demo for the effect:
![NgMatSearchBar demo](https://raw.githubusercontent.com/tommueller/ng-mat-search-bar/master/docs/demo.gif)

## Installation

Install the dependency via npm:

```bash
npm install ng-mat-search-bar --save
```

or yarn

```bash
yarn add ng-mat-search-bar
```

and import the module into your apps _app.module.ts_ like this:

```typescript
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

...

@NgModule({
  ...,
  imports: [
    ...,
    NgMatSearchBarModule
  ],
  ...
})
```

Also make sure that in your _app.module.ts_ you import the `BrowserAnimationsModule`, otherwise the animations will not work!

You also need to add Material Icons webfont by adding

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

to your _index.html_.

## Usage

You can use the component with its selector:

```angular
<mat-search-bar></mat-search-bar>
```

and then subscribe to the different events it is outputting:

- **onBlur**: fired when the search-field looses focus
- **onClose**: fired when the user closes the searchfield by clicking the close-button
- **onEnter**: fired when user presses enter-button in search-field
- **onFocus**: fired when user focuses the search-field
- **onOpen**: fired when the searchbar is shown

it also offers two public methods to open / close the searchbar:

- **open()**: opens the searchbar
- **close()**: closes the searchbar

and a property:
- **searchVisible**: which holds the current visibility state of the search-input

also, you can use it with ReactiveFormsModule, by passing a `FormControl` as input: e.g

```html
...
<mat-search-bar [formControl]="control" ></mat-search-bar>
...
```
and in .ts file: 

```typescript
  ...@Component({})...
    control: FormControl = new FormControl('');
  ...
```


## Contributions

Please don't hesitate to file an issue or send in a PR if you have any improvements or found bugs.
