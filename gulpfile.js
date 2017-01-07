var gulp=require('gulp'); //tworzy środowisko gulpa
var sass=require('gulp-sass');


//na obiekcie gulpa wykonuje funkcje. Ma skompilowac pliki
gulp.task('sass', function  
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

//funkcja spowoduje, że gulp będzie obserwować czy nastąpiły zmiany w pliku
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss'['sass']);
});
