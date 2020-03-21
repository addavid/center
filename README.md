Center
======
Center is a simple  React startpage for daily use.\
The project is based on [vkhitrin\'s](https://github.com/vkhitrin) [hub](https://github.com/vkhitrin/hub/) (a modified fork of [tilde](https://github.com/cadejscroggins/tilde)).


Requirements for Build
----------------------
You should have NodeJS (10+) installed.\
When testing your changes, you could use `npm start` in order to lauch a basic webserver for development purposes,\
otherwise it's suggested that you set the value of the property 'mode' to 'production' in the `webpack.config.js` file.\
Once finished, make sure to build using `npm run build`.

Usage
-----
1. Clone the repository using `git clone https://github.com/addavid/center.git`.
2. Run `npm install` in order to download the dependencies.
3. Add your favorite websites to `app/config/commands.js` (examples are within the file).
4. Test your changes with `npm start` (a simple webserver will be executed).
5. Once satisfied, build using `npm run build`.
6. The bundled files will be in the `dist` directory.

TODO
----
None at the moment.
