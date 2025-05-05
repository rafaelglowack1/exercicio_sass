const gulp= require('gulp');
const sass= require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./'));
}

exports.default= gulp.parallel(styles );