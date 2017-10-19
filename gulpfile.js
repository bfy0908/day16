var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");
gulp.task("server",function(){
    gulp.src(".")
        .pipe(webserver({
            livereload:true,
            directoryListing:true,
            middleware:function(req,res,next){
                var requestUrl=url.parse(req.url).pathname
            }
        }))
});
gulp.task("server", function () {
    gulp.src(".")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            middleware: function (req, res, next) {
                var requestUrl = url.parse(req.url).pathname;
                if (requestUrl == "/index") {
                    var data = [{
                        id: 1,
                        name: "被子",
                        image: "http://localhost:8080/Content/images/icon/img_01.jpg",
                        addr: "浙江",
                        state: true,
                        num: 1,
                        price: 24,
                        size: "S",
                        color: "#ff0"
                    },
                        {
                            id: 2,
                            name: "桌子",
                            image: "http://localhost:8080/Content/images/icon/img_02.jpg",
                            addr: "深圳",
                            state: true,
                            num: 1,
                            price: 330,
                            size: "M",
                            color: "red"
                        },
                        {
                            id: 3,
                            name: "椅子",
                            image: "http://localhost:8080/Content/images/icon/img_03.jpg",
                            addr: "广州",
                            state: false,
                            num: 1,
                            price: 360,
                            size: "L",
                            color: "#00f"
                        }

                    ];
                    res.writeHead(200, {
                        "Content-type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    });
                    res.write(JSON.stringify(data));
                    res.end();
                }
                next()
            },
            open: "/index.html",
            port: 8080
        }))
});