var gulp=require('gulp'); //tworzy środowisko gulpa
var sass=require('gulp-sass');

var browserSync=require('browser-sync').create();

gulp.task('browserSync', function(){
    browserSync.init ({
        server :{
        baseDir: "app"
    },
    })
})



//na obiekcie gulpa wykonuje konkretna funkcje. Ma skompilowac pliki do sassa
gulp.task('sass', function (){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true
    }))
});

//funkcja spowoduje, że gulp będzie obserwować czy nastąpiły zmiany w pliku, jeśli zmieniłam to sam to przekompiluje i wykona powyższą funkcję

gulp.task('watch', ["browserSync", "sass"], function(){
gulp.watch('app/scss/**/*.scss',['sass']);
});
