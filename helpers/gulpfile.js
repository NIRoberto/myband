var gulp = require('gulp');
var yaml = require('js-yaml');
var path = require('path');
var fs = require('fs');
// convert yaml -json
gulp.task('swagger', function (done) {
    var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, "../api/swagger/swagger.yaml")));
    fs.writeFileSync(
        path.join(__dirname, "../swagger/swaggerdocs.json"),
        JSON.stringify(doc, null, " ")
    );
    done();
});
// watch for changes 
gulp.task( "watch" , function() {
    gulp.watch('../api/swagger/swagger.yaml', gulp.parallel('swagger'));
})