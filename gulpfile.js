var gulp = require("gulp");
var less = require("gulp-less");



var lessGlob = ["src/**.less","!**/tool.less"];


function swallowError(error){
    console.error("已捕获错误:",error.toString());
}

gulp.task("build-less",function(){
    return gulp.src(lessGlob)
        .pipe(less({

        }))
        .on("error",swallowError)
        .pipe(gulp.dest(
            "src"
        ))
    ;
});



gulp.task("watch-less",function(){
    gulp.watch(lessGlob,["build-less"])
})



