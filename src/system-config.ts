// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  "materialize": "vendor/materialize-css",
  "angular2-materialize": "vendor/angular2-materialize",
  "jquery": "vendor/jquery"
  // 'angularfire2': 'vendor/angularfire2',
  // 'firebase': 'vendor/firebase'
};

/** User packages configuration. */
const packages: any = {
  'angularfire2': { main: 'angularfire2.js' },
  'materialize': {
    "format": "global",
    "main": "dist/js/materialize",
    "defaultExtension": "js"
  },
  'angular2-materialize': {
    "main": "dist/index",
    "defaultExtension": "js"
  }
  // 'firebase': {main: 'lib/firebase-web.js'}
};


const materialPkgs: string[] = [
  'core',
  'toolbar',
  'icon',
  'button',
  'sidenav',
  'list',
  'card',
  'input',
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js` };
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/today/today',
  'app/today',
  'app/groups',
  'app/group-detail',
  'app/group-list',
  'app/lesson',
  'app/lesson/lesson-list',
  'app/lesson/lesson-detail',
  'app/group/group-detail',
  'app/group/group-list',
  'app/student',
  'app/student/student-list',
  'app/student/student-detail',
  'app/setting',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
