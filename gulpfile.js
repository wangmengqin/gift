
//加载模块
var gulp  = require("gulp");
//开启任务：第一个参数任务名称,数组，第二个回调函数
gulp.task("copy-index",function(){
	//管道传输  gulp.src:输入源 gulp.dest(路径)  管道pipe()
	// **:代表0个或者多个子文件夹
	gulp.src("src/html/**/*.html").pipe(gulp.dest("dist/html"));
});
gulp.task("copy-css",function(){
	gulp.src("src/css/**/{headandfoot,list}.css").pipe(gulp.dest("dist/css"));
});

gulp.task("copy-imgs",function(){
	gulp.src("src/images/**/*").pipe(gulp.dest("dist/imgs"));
});


//图片压缩
//1、加载模块
var imgMin = require("gulp-imagemin");
gulp.task("imgsMin",function(){
	gulp.src("src/images/**/*").pipe(imgMin()).pipe(gulp.dest("dist/imgs"))
})


//js压缩
var jsMin = require("gulp-uglify");
gulp.task("jsMin",function(){
	gulp.src("src/js/js/*.js").pipe(jsMin()).pipe(gulp.dest("dist/js/js"));
})

//编译sass 压缩css
var bSass = require("gulp-sass-china");
gulp.task("bSass",function(){
	gulp.src("src/sass/**/*.scss")
	.pipe(bSass({
		outputStyle:"expanded"
	}))
	.pipe(gulp.dest("src/css"));
})

//监听
gulp.task("addEvent",function(){
	gulp.watch("src/sass/*.scss",["bSass"]);
})

//服务器
var content = require("gulp-connect");
gulp.task("content",function(){
	content.server({
		root:"src",
		port:7744,
		livereload:true
	})
})

//监听
gulp.task("server-watch",function(){
	gulp.watch("src/sass/*.scss",["bSass"]);
	gulp.watch(["src/css/index.css","src/index.html","src/html/*.html"],function(){
		gulp.src("src/html/*.html").pipe(content.reload())
	});
})
gulp.task("connect",["content","server-watch"]);