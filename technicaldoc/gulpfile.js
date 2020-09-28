const gulp = require("gulp");
const sass = require("gulp-sass");

const browserSync = require("browser-sync").create();

// compile sass to css

function style() {
  // where is the scss file
  return (
    gulp
      .src("./scss/**/*.scss")
      // compile it to css
      .pipe(sass().on("error", sass.logError))
      // save the compiled css
      .pipe(gulp.dest("./css"))
      // stream to browser
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
