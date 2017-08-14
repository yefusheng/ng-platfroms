var gulp = require('gulp');
var rename = require('gulp-rename');
var through2 = require('through2');
var langJson = {};
var i18nLang = process.env.npm_package_config_l || 'zh-cn';

/**
 * 合并各个子目录下的语言包文件，生成独立的语言包
 */
gulp.task('generate-lang-json', function () {
  return gulp.src(['src/**/*' + i18nLang + '.json', '!src/assets/**/*.json'])
    .pipe(through2.obj(function (file, encoding, callback) {
      var originalContents = String(file.contents);
      var subLangJson;
      try {
        subLangJson = JSON.parse(originalContents);
        for (key in subLangJson)
        {
          if(langJson[key]){
            throw new Error('The key \''+langJson[key]+' \'is repeat,file path:'+file.history);
          }else{
            langJson[key] = subLangJson[key] 
          }
          
        }
      } catch (e) {
        console.dir(e);
        throw new Error('Parse language file path failed');
      }
      file.contents = new Buffer(JSON.stringify(langJson));
      callback(null, file);
    }))
    .pipe(rename(i18nLang + '.json'))
    .pipe(gulp.dest('src/assets/i18n/'))
})
