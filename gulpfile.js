/**
 * Permite la utilizacion de las nuevas caracteristicas de EcmaScripts.
 * 
 * @type babelify.
 */
const BABELIFY   = require("babelify");
/**
 * Nos permitira generar el empaquetado de nuestro codigo esto incluira
 * las librerias que estemos utilizando.
 * 
 * @type browserify
 */
const BROWSERIFY = require("browserify");
/**
 * Nos permite la ejecucion oh automatizacion de tareas.
 * 
 * @type gulp
 */
const GULP = require("gulp");
/**
 * Permite renombrar el archivo de salida.
 * 
 * @type gulp-rename.
 */
const RENAME = require("gulp-rename");//permite renomprar un paquete
/**
 * Permite la traduccion del codigo armado por browserify a algo
 * que entienda gulp.
 * 
 * @type vinyl-source-stream.
 */
const SOURCE = require("vinyl-source-stream");
/**
 * Se declara la tarea que armara el paquete.
 */
GULP.task("build-js", () => {
    BROWSERIFY("./index.js")
        .transform(BABELIFY,  {presets:["es2015"], plugins:['syntax-async-functions', 'transform-regenerator']})
        .bundle()
        .pipe(SOURCE("index.js"))
        .pipe(RENAME("index-build.js"))
        .pipe(GULP.dest("./"));
});
/**
 * ejecucion de la tarea por default.
 */
GULP.task("default", ["build-js"]);