const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')      //mimifica o arquivo CS)
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')


function tarefasCSS() {  
   return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css',
                    './node_modules/bootstrap-icons/font/bootstrap-icons.css',
                    './vendor/owl/css/owl.css',
                    './src/css/style.css'])                      // vai pegar qualquer arquivo .css dentro so vendor
    //pipe  são os tratamentos dos arquivos
        .pipe(concat('styles.css'))
        .pipe(cssmin())         // não precisa de parâmetro, a propria função faz a mimificação de todos os arquivos
        .pipe(rename({ suffix: '.min'})) //libs.min.css
        .pipe(gulp.dest('./dist/myCSS'))  
    //  vai pegas os arquivos 'aqui' e vou direcionar para um nome destinho 'mesmo que não existe, ele cria' 
    //dist é o meu diretório de produção, ou seja, o que será publicado quando meu projeto estiver pronto para subir para o servidor
      
}
function tarefasJS(){
    return gulp.src(['./node_modules/jquery/dist/jquery.js',
                    './node_modules/bootstrap/dist/js/bootstrap.js',
                    './vendor/owl/js/owl.js',
                    './vendor/jquery-mask/jquery.mask.js',
                    './src/js/custom.js'])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/myJS'))
}

function tarefasImages() {
return   gulp.src('./src/img-jquery/*')
         .pipe(imagemin( {
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
         }))
        .pipe(gulp.dest('./dist/myImganes'));
   }

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImages