const gulp  = require('gulp')
const concat  = require('gulp-concat')
const cssmin  = require( 'gulp-cssmin')      //mimifica o arquivo CSS
const rename  = require('gulp-rename')
const uglify = require( 'gulp-uglify')      //mimifica o arquivo js
// const image  = require('gulp-image')

    // esses imports eram para uma versão de arivo  = script
// import gulp  from 'gulp';
// import concat  from 'gulp-concat';
// import cssmin  from  'gulp-cssmin';
// import rename  from 'gulp-rename';
// import uglify  from 'gulp-uglify';
// import image  from 'gulp-image';

function tarefasCSS(cb) {    //cd === callback
    return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css',
                    
                    './vendor/owl/css/owl.css',
                    './node_modules/bootstrap-icons/font/bootstrap-icons.css',
                    './src/css/style.css'])                      // vai pegar qualquer arquivo .css dentro so vendor
    //pipe  são os tratamentos dos arquivos
        .pipe(concat('libs.css'))
        .pipe(cssmin())         // não precisa de parâmetro, a propria função faz a mimificação de todos os arquivos
        .pipe(rename({ suffix: '.min'})) //libs.min.css
        .pipe(gulp.dest('./dist/myCSS'))  
    //  vai pegas os arquivos 'aqui' e vou direcionar para um nome destinho 'mesmo que não existe, ele cria' 
    //dist é o meu diretório de produção, ou seja, o que será publicado quando meu projeto estiver pronto para subir para o servidor
      
}
function tarefasJS(){
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
                     './vendor/jquery-mask',
                     './vendor/owl/js/owl.js',
                    './src/js/custom.js'])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/myJS'))
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
        .pipe(gulp.dest('./dist/myImages'))
}

//para essa função acima funcionar, eu preciso exporta-la, segui o exemplo
exports.styles = tarefasCSS        // exports no plural
exports.scripts = tarefasJS
// exports.imagens =  tarefasImagens     // ainda está dando erro quando eu adcino a devD.. 'gulp: image', verão 6.3.1'

// export { rename, tarefasCSS, tarefasJS, tarefasImagens}  //caso fosse em javaescript