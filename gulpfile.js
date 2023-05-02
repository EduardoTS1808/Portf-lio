const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')      //mimifica o arquivo CS)
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create()
const reload = browserSync.reload


function tarefasCSS(callback) {  
      gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css',
                    './node_modules/bootstrap-icons/icons',
                    './vendor/owl/css/owl.css'])                      
    //pipe  são os tratamentos dos arquivos
        .pipe(concat('libs.css'))
        .pipe(cssmin())         // não precisa de parâmetro, a propria função faz a mimificação de todos os arquivos
        .pipe(rename({ suffix: '.min'})) //libs.min.css
        .pipe(gulp.dest('./dist/CSS'))  
    //  vai pegas os arquivos 'aqui' e vou direcionar para um nome destinho 'mesmo que não existe, ele cria' 
    //dist é o meu diretório de produção, ou seja, o que será publicado quando meu projeto estiver pronto para subir para o servidor
   return callback()
}
function tarefasSASS(cb) {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/CSS'));

     cb()
}

function tarefasBootstrapIcons(cb){
  gulp.src(['./node_modules/bootstrap-icons/icons/*.svg'])
    .pipe(gulp.dest('./dist/icons'));

    cb()
}


function tarefasJS(callback){
     gulp.src(['./node_modules/jquery/dist/jquery.js',
                    './node_modules/bootstrap/dist/js/bootstrap.js',
                    './vendor/owl/js/owl.js',
                    './vendor/jquery-mask/jquery.mask.js',
                    './src/js/custom.js'])
        .pipe(babel({
          comments: true,
          presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())         
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/JS'))
     return  callback()
}

function tarefasImages(callback) {
  gulp.src('./src/img-jquery/**/*')
         .pipe(imagemin([
          imagemin.gifsicle({interlaced: true}),
          imagemin.mozjpeg({quality: 75, progressive: true}),
          imagemin.optipng({optimizationLevel: 5}),
          imagemin.svgo({
            plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
            ]
          })
        ]))
        .pipe(gulp.dest('./dist/images'))
    return   callback()
   }
function tarefasHTML(callback){
    gulp.src('./src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

  return  callback()
}
gulp.task('serve', function(){

  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  })
  gulp.watch('./dist/**/*').on('change', reload)
  // gulp.watch('./src/**/*').on('change', process) // repete o processo quando alterar algo em src
  // gulp.watch('./src/**/*').on('change', reload)

})
function end(callback){
  console.log('tarefas concluidas com sucesso!!!')
  return callback()
}
const process = parallel(tarefasCSS,  tarefasSASS, tarefasJS, tarefasHTML, tarefasImages, tarefasBootstrapIcons, end)

exports.styles = tarefasCSS
exports.sass = tarefasSASS
exports.scripts = tarefasJS
exports.images = tarefasImages
exports.htmls = tarefasHTML
exports.concat = tarefasBootstrapIcons

exports.default = process






