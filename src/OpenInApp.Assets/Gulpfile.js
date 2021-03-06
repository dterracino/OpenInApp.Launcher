﻿/// <binding AfterBuild='default' ProjectOpened='default' />
var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var replace = require('gulp-replace');

gulp.task('OpenInAltovaXmlSpy',       function () { return OIAConcat('OpenInAltovaXmlSpy'       ,'Altova XMLSpy XML Editor') });
gulp.task('OpenInApp.Template',       function () { return OIAConcat('OpenInApp.Template'       ,'GregtGregt') });
gulp.task('OpenInGimp',               function () { return OIAConcat('OpenInGimp'               ,'GIMP') });
gulp.task('OpenInMarkdownMonster',    function () { return OIAConcat('OpenInMarkdownMonster'    ,'Markdown Monster') });
gulp.task('OpenInPaintDotNet',        function () { return OIAConcat('OpenInPaintDotNet'        ,'paint.net') });
gulp.task('OpenInVS2012',             function () { return OIAConcat('OpenInVS2012'             ,'Visual Studio 2012') });
gulp.task('OpenInVS2013',             function () { return OIAConcat('OpenInVS2013'             ,'Visual Studio 2013') });
gulp.task('OpenInVS2015',             function () { return OIAConcat('OpenInVS2015'             ,'Visual Studio 2015') });
gulp.task('OpenInVS2017Community',    function () { return OIAConcat('OpenInVS2017Community'    ,'Visual Studio 2017 Community Edition') });
gulp.task('OpenInVS2017Enterprise',   function () { return OIAConcat('OpenInVS2017Enterprise'   ,'Visual Studio 2017 Enterprise Edition') });
gulp.task('OpenInVS2017Professional', function () { return OIAConcat('OpenInVS2017Professional' ,'Visual Studio 2017 Professional Edition') });

gulp.task('default',
    [ 'OpenInAltovaXmlSpy'
    , 'OpenInApp.Template'
    , 'OpenInGimp'
    , 'OpenInMarkdownMonster'
    , 'OpenInPaintDotNet'
    , 'OpenInVS2012'
    , 'OpenInVS2013'
    , 'OpenInVS2015'
    , 'OpenInVS2017Community'
    , 'OpenInVS2017Enterprise'
    , 'OpenInVS2017Professional']);

function OIAConcat (appNam, appDesc) { 
    return gulp
        .src([appNam + '/ReadMeHeader.md', 'ReadMeCommon.md'])
        .pipe(concat(appNam + '/README.md'))
        .pipe(replace('[ThirdPartyApp]', '[' + appDesc + ']'))
        .pipe(gulp.dest('.'));
} 
