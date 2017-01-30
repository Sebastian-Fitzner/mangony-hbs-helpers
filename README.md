<h1 align="center">
<img width="400px" src="http://www.veams.org/downloads/logo.svg" alt="Logo Mangony" /><br>
Mangony Handlebars Helpers
</h1>

### Installation

Install `mangony-hbs-helpers` with 

``` bash
npm install mangony-hbs-helpers --save-dev
```

### Usage

Helpers are generated by passing in an instance of Handlebars.

### `lib.register(handlebars) : Object`

- `handlebars` `Handlebars` - An instance of Handlebars.

Both generates an object containing the mangony helpers and registers them with Handlebars automatically.

```js
var handlebars = require('handlebars');
var helpers = require('mangony-hbs-helpers');

helpers.register(handlebars);
```

### Helpers

#### `{{#beautifyHTML]}}`

This helper cleans up your html block by indenting and deleting spaces and line breaks.

```handlebars
{{#beautifyHTML}}
    <div class="test">
        <p>wrapper start</p>
        
        {{{yield}}}
        
        <p>wrapper end</p>
    </div>
{{/beautifyHTML}}
```

#### `{{buildPath [string] [string2] goUp=[number] }}`

- `string` `String` - First part of a path.
- `string2` `String` - Second part of a path.
- `goUp` `Number` - You can go specific folders up by defining the hash `goUp`.

This helper concatenate two strings by adding a `/`.

```handlebars
{{buildPath "src/templates" "test/file.hbs"}}
```

#### `{{concat [string] [string2] }}`

- `string` `String` - First part of a string.
- `string2` `String` - Second part of a string.

This helper concatenate two strings.

```handlebars
{{concat "src/templates/test/file" ".hbs"}}
```

#### `{{debug [context] }}`

- `context` `Object` - Log a specific context and display the value of the context.

This helper debugs a passed context.

```handlebars
{{debug this.pagename}}
```

#### `{{{embeding [path] }}}`

- `path` `String` - Path to a file.

This helper embeds the file content. 

```handlebars
{{{embeding "my/custom/file.hbs"}}}
```

#### `{{{#filter [array] by=[value] reverse=[boolean] }}}`

- `array` `Array` - Array you want to filter.
- `by` `String` - Filter value.
- `reverse` `Boolean` - If you want to reverse the result set it to true.

This helper filters an array after a specific property value. 

```handlebars
{{#filter myData by="settings.hide" reverse=true}}
    {{#each this}}
        my filtered content element {{this.name}}
    {{/each}}
{{/filter}}
```

#### `{{#for [from] [to] [incr] }}`

- `from` `Number` - Starting index for the loop.
- `to` `Number` - End index for the loop.
- `incr` `Number` _Optional_ - Increment number for the loop.

This helper provides a for loop which can be used to repeat content.

```handlebars
{{#for 0 2 1}}
    My Custom content 
{{/for}}
```

#### `{{#getData [from] [to] [incr] }}`

- `from` `Number` - Starting index for the loop.
- `to` `Number` - End index for the loop.
- `incr` `Number` _Optional_ - Increment number for the loop.

This helper allows you to get the whole data object of partials, pages or layouts.

```handlebars
{{#getData from="my-custom-partial" typeof="partial"}}
	my data object of the partial like: {{this.filename}} | {{this.id}}
{{/getData}}
```

#### `{{getUrl [path]}}`

- `path` `String` - Absolute or relative URL path to file.

This helper prints out an URL (`http://`, `https://`, `mailto:`) or the `assets` prefix.

```handlebars
{{getUrl "my/custom/file.jpg"}} outputs "./my/custom/file.jpg" 
{{getUrl "https://google.com"}} outputs "https://google.com"
```

#### `{{#highlight [type] origin=[boolean] escapeHTML=[boolean] }}`

- `type` `String` - Language of code block.
- `origin` `Boolean` - When set to true it returns the highlighted block and the origin one
- `escapeHTML` `Boolean` - Escape HTML when set to true

This helper uses `highlight.js` to return a syntax highlighted code block.

```handlebars
{{#highlight "hbs"}}
    <div class="test">
        <p>wrapper start</p>
        {{{yield}}}
        <p>wrapper end</p>
    </div>
{{/highlight}}
```

#### `{{#limit [start] [end] [data] }}`

- `start` `Number` - Starting index.
- `end` `Number` - End index.
- `data` `[Object|Array]` - Data object/array which will be iterate.

This helper returns a limited output from your data object.

```handlebars
{{#limit 0 3 data}}
    <li class="item">
        {{> item }}
    </li>
{{/limit}}
```

#### `{{{markdown [filepath] }}}`

- `filepath` `String` - Path to your markdown file.

This helper renders a markdown file into HTML by using `markdown-it`, `markdown-it-attrs` and `markdown-it-named-headers`.

```handlebars
{{{markdown "dir/file.md"}}}
```

#### `{{#merge [data] with=[obj|string] }}`

- `data` `Object` - Data object.
- `with` `Object|String` - JSON string or object which will be merged with `data`

This helper merges two objects into one to extend the context.

```handlebars
{{#merge this with=data}}
    <li class="item">
        {{> item }}
    </li>
{{/merge}}

{{#merge this with='{"custom": "content"}'}}
    <li class="item">
        {{> item }}
    </li>
{{/merge}}
```

#### `{{now [format] }}`

- `format` `String` - Date format you like to get.

This helper displays the date of now and uses [moment.js](http://momentjs.com). 

```handlebars
Current Time: {{now "Do MMMM YYYY, h:mm:ss a"}}
```

#### `{{#pictureData [pictures] [presets] }}`

- `pictures` `Array` - Array of all pictures.
- `presets` `Array` - Array of presets you want to display.

This helper returns an array with the images you provided as parameter. See [`image-size-export`](https://www.npmjs.com/package/image-size-export) for a simple picture module.

```handlebars
{{#pictureData pictures imagePresets}}
	<div class="doc__image-presets">
		<h2>Image Presets</h2>
		{{#each this}}
			<h3>{{uppercase presetName}}</h3>
			<table class="c-table--zebra" data-css="c-table">
				<thead class="table__head">
				<tr class="table__row is-header">
					<th class="table__headline is-th">Breakpoints</th>
					<th class="table__headline is-th">Width</th>
					<th class="table__headline is-th">Height</th>
				</tr>
				</thead>
				<tbody class="table__body">
				{{#each data}}
					<tr class="table__row">
						<td class="table__cell is-title is-td"> {{this.breakpoint}}</td>
						<td class="table__cell is-td"> {{this.width}}</td>
						<td class="table__cell is-td"> {{this.height}}</td>
					</tr>
				{{/each}}
				</tbody>
			</table>
		{{/each}}
	</div>
{{/pictureData}}
```

#### `{{random}}`

This helper returns a random number between 0 - 1000.

```handlebars
<div class="doc__image-presets" id="my-id-{{random}}">
</div>
```

#### `{{#objToArr [object]}}`

- `object` `Object` - Object which gets flattened to an array.

This helper flattens an object to an array.

```handlebars
{{#objToArr pages}}
	{{#each this}}
	    My array element: {{this.name}}
	[{{/each}}
{{/objToArr}}
```

#### `{{#sortArr [arr] [prop] reverse=[boolean]}}`

- `arr` `Array` - Array which you want to sort.
- `prop` `String` - String which äÄ'Ä


This helper flattens an object to an array.

```handlebars
{{#objToArr pages}}
	{{#each this}}
	    My array element: {{this.name}}
	[{{/each}}
{{/objToArr}}
```

#### `{{stringify [JSON]}}`

- `JSON` `Object` - JSON/JS object.

This helper makes a string out of JSON objects.

```handlebars
{{stringify this.jsOptions}}
```

#### `{{#times [n] }}`

- `n` `Number` - Repeating number.

This helper repeats the content n times.

```handlebars
{{#times 3}}
    My Custom content {{this}}
{{/times}}
```

### Mangony

**Mangony is yet another static site generator - fast, simple and powerful:** https://github.com/Sebastian-Fitzner/mangony

## License 

see [LICENSE.md](https://github.com/Sebastian-Fitzner/mangony-hbs-helpers/blob/master/LICENSE.md).