## node-config-files

While working on any Node project we often face the problem when we need to manage our configuration files based on environments. For instance, most well known environments are `development`, `test` and `production`. And we not limited by them, right!? Projects can have `non-standard` environment names and for each of them we want sleek and straight forward way of how we manage its configuration files. Here is why `node-config-files` can come in handy.

### Scaffolding

By default `node-config-file` looks for `config` folder within the root of our project folder. And, it expects a file structure of this folder to be flat. In other words, `node-config-files` doesn't support subfolders.

Default
```bash
<project_root>/config/*
```

NOTE: If you prefer to keep our configuration files in different folder, you should specify its path explicitly. [See example](#example-custom-path)

### File naming

There are rules of how you name your configuration files in order to make them work with `node-config-files` module.

A file name should follow the pattern: `[section].[environment].config.js`

Where:

- section - A property name in a [global config object](#global_config_object).
- environment - An environment name in which this configuration will be available.

Here examples of valid configuration file names:

- `project.config.js`
- `database.development.config.js`
- `rest_api.production.config.js`

For files that do not belong to any environment its content will be available over property `common` in [global config object](#global_config_object), and for files that do its content available over property `env`.

### Getting started

#### Install

To install the module run following command in your project folder.
```bash
npm i node-config-files --save
```

#### Configure

Create a folder where you are going to store configuration files for your applicaiton.

```bash
mkdir config
```

Once folder is created you can start add you configuration files to it.


NOTE: By default this module looks at `config` folder in the root of your application. But this behaviour can be overridden.

### Examples

For more detailed example please see [tests](https://github.com/fupslot/node-config-files/tree/master/tests)

#### Common use case

```javascript
/*
	Assume we have following config files
	./config/project.config.js
	./database/database.development.config.js
*/

const config = require('node-config-files')();

config.common.project; // project.config.js
config.env.database;   // database.development.config.js
```

<a name="example-custom-path"></a>
#### Custom configuration folder path

```bash
const config = require('node-config-files')(
	'./server/config',
	{
	  debug: true,
	  NODE_ENV: 'test'
	}
);
```

NOTE: Make sure that your path is relative to your project root folder.



### Options

- options.debug - Shows errors in the console, if any. (default: false)
- options.NODE_ENV - Allows you to override `process.env.NODE_ENV`. (default: development)

<a name="global_config_object"></a>
### Global config object

This is a common object which will be returned once `node-config-files` module is invoked.

```json
{
	"common": {},
	"env": {},
	"packageConfig": {}
}
```

#### config.common

Contains the content of files which are environment independent.

#### config.env

Contains the content of files which are environment dependent.

#### config.packageConfig

Contains properties which were defined in `package.json` file.

NOTE: Properties `dependencies` and `devDependencies` are not included.

## Licence
Licensed under GNU GPLv3, see [LICENSE](LICENSE) for the full license.