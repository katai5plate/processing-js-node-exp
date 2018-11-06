const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('bsync', ()=>{
    browserSync.init({
        server: {
            baseDir: "src",
            index: "index.html"
        }
    });
});

gulp.task('reload', ()=>{
    browserSync.reload();
});

gulp.task('default', ['bsync'],()=>{
    gulp.watch("src/*.html", ['reload']);
    gulp.watch("src/*.css", ['reload']);
    gulp.watch("src/*.js", ['reload']);
    gulp.watch("src/*.pde", ['reload']);
});