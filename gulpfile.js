const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-image')

function tarefasCSS(cb) {    //cd === callback
    return gulp.src('./vendor/**/*.css')                      // vai pegar qualquer arquivo .css dentro so vendor
    //pipe  são os tratamentos dos arquivos
        .pipe(concat('libs.css'))
        .pipe(cssmin())         // não precisa de parâmetro, a propria função faz a mimificação de todos os arquivos
        .pipe(rename({ suffix: '.min'})) //libs.min.css
        .pipe(gulp.dest('./dist/css'))  
    //  vai pegas os arquivos 'aqui' e vou direcionar para um nome destinho 'mesmo que não existe, ele cria' 
    //dist é o meu diretório de produção, ou seja, o que será publicado quando meu projeto estiver pronto para subir para o servidor
      
}
function tarefasJS(){
    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
}
function tarefasImagens(){
    return gulp.src('./src/img-jquery/*') // * == qualquer item, qualquer imagem
        .pipe(image({pngquant: true,
                    optipng: false,
                    zopflipng: true,
                     jpegRecompress: false,
                     mozjpeg: true,
                     gifsicle: true, 
                     svgo: true,
                     concurrent: 10, 
                     quiet: true
            }))
        .pipe(gulp.dest('./dist/images'))
}

//para essa função acima funcionar, eu preciso exporta-la, segui o exemplo
exports.styles = tarefasCSS        // exports no plural
exports.scripts = tarefasJS
exports.imagens = tarefasImagens
