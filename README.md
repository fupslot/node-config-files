## node-config-files

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



### Config object

This is a common object which will be returned once `node-config-files` module is invoked.

```json
{
	"common": {},
	"env": {},
	"packageConfig": {}
}
```

#### config.common

TODO

#### config.env

TODO

#### config.packageConfig

Contains properties which were defined in `package.json` file.

NOTE: Properties `dependencies` and `devDependencies` are not included.