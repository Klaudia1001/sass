var gulp=require('gulp'); //tworzy środowisko gulpa
var sass=require('gulp-sass');


//na obiekcie gulpa wykonuje konkretna funkcje. Ma skompilowac pliki do sassa
gulp.task('sass', function (){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

//funkcja spowoduje, że gulp będzie obserwować czy nastąpiły zmiany w pliku, jeśli zmieniłam to sam to przekompiluje i wykona powyższą funkcję
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss',['sass']);
});
