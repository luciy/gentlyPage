/**
 * GentlyPage.js
 * @author  : lengxu
 * @version : 0.0.1
 * @date    : 2015-05-28
 * http://www.uis.cc/
 * copyright (c) 2014-2015, Autohome.QingUI v0.2.1
 */
;
if (typeof Zepto === 'undefined') {
    throw new Error('GentlyPage.js\'s script requires Zepto')
}

// GentlyPage组件
// ==============================
! function($) {
    "use strict";


    function GentlyPage(config) {

        // 定义配置选项
        config = $.extend({
            zIndex: 999,                // 默认层级
            activeClassName: 'active',    // 切换到当前显示层添加的ClassName
            animationDuration: 800,     // 切换动画时间
            timingFunction: 'ease',     // 动画曲线
            callback: function() {}     // 切换后的回调
        }, config);


        this.zIndex = config.zIndex;
        this.activeClassName = config.activeClassName;
        this.animationDuration = config.animationDuration;
        this.timingFunction = config.timingFunction;
        this.callback = config.callback;
        this.nowAnimating = true;

    }

    GentlyPage.prototype = {
        // nowObj向上划出屏幕
        moveUpOut: function(nowObj, nextObj){       //参数为 当前屏对象 和  下一个要显示屏对象
            var _this = this;
            if(!_this.nowAnimating){return;}         //判断运动是否完成
            _this.zIndex++;
            _this.nowAnimating = false;
            $(nowObj).css({'z-index':_this.zIndex}).animate({
                    'transform': 'translateY(-100%)',
                    '-webkit-transform': 'translateY(-100%)'},
                _this.animationDuration,
                _this.timingFunction,
                function() {
                    $(nowObj).addClass('fn-hide').removeClass(_this.activeClassName).removeAttr('style');
                    $(nextObj).addClass(_this.activeClassName);
                    _this.nowAnimating = true;
                    _this.callback && _this.callback();
                }
            );
            $(nextObj).removeClass('fn-hide');
        },
        // nextObj向上划入屏幕
        moveUpIn: function(nowObj,nextObj){
            var _this = this;
            if(!_this.nowAnimating){return;} 
            _this.zIndex++;
            _this.nowAnimating = false;

            $(nextObj).removeClass('fn-hide')
                .css({
                    'z-index':_this.zIndex,
                    'transform': 'translateY(100%)',
                    '-webkit-transform': 'translateY(100%)'
                }).animate({
                    'transform': 'translateY(0)',
                    '-webkit-transform': 'translateY(0)'},
                _this.animationDuration,
                _this.timingFunction,
                function() {
                    $(nowObj).addClass('fn-hide').removeClass(_this.activeClassName).removeAttr('style');
                    $(nextObj).addClass(_this.activeClassName);
                    _this.nowAnimating = true;
                    _this.callback && _this.callback();
                }
            );
        },
        // nowObj向下划出屏幕
        moveDownOut: function(nowObj, nextObj){
            var _this = this;
            if(!_this.nowAnimating){return;}
            _this.zIndex++;
            _this.nowAnimating = false;
            $(nowObj).css({'z-index':_this.zIndex}).animate({
                    'transform': 'translateY(100%)',
                    '-webkit-transform': 'translateY(100%)'},
                _this.animationDuration,
                _this.timingFunction,
                function() {
                    $(nowObj).addClass('fn-hide').removeClass(_this.activeClassName).removeAttr('style');
                    $(nextObj).addClass(_this.activeClassName);
                    _this.nowAnimating = true;
                    _this.callback && _this.callback();
                }
            );
            $(nextObj).removeClass('fn-hide');
        },
        // nextObj向下划入屏幕
        moveDownIn: function(nowObj, nextObj){
            var _this = this;
            if(!_this.nowAnimating){return;}
            _this.zIndex++;
            _this.nowAnimating = false;

            $(nextObj).removeClass('fn-hide')
                .css({
                    'z-index':_this.zIndex,
                    'transform': 'translateY(-100%)',
                    '-webkit-transform': 'translateY(-100%)'
                }).animate({
                    'transform': 'translateY(0)',
                    '-webkit-transform': 'translateY(0)'},
                _this.animationDuration,
                _this.timingFunction,
                function() {
                    $(nowObj).addClass('fn-hide').removeClass(_this.activeClassName).removeAttr('style');
                    $(nextObj).addClass(_this.activeClassName);
                    _this.nowAnimating = true;
                    _this.callback && _this.callback();
                }
            );
        },
        moveLeftOut: function(nowObj, nextObj){       //参数为 当前屏对象 和  下一个要显示屏对象
            var _this = this;
            if(!_this.nowAnimating){return;}         //判断运动是否完成
            _this.zIndex++;
            _this.nowAnimating = false;
            $(nowObj).css({'z-index':_this.zIndex}).animate({
                    'transform': 'translateX(-100%)',
                    '-webkit-transform': 'translateX(-100%)'},
                _this.animationDuration,
                _this.timingFunction,
                function() {
                    $(nowObj).addClass('fn-hide').removeClass(_this.activeClassName).removeAttr('style');
                    $(nextObj).addClass(_this.activeClassName);
                    _this.nowAnimating = true;
                    _this.callback && _this.callback();
                }
            );
            $(nextObj).removeClass('fn-hide');
        },
        // nextObj向左划入屏幕
        moveLeftIn: function(nowObj,nextObj){
            var _this = this;
            if(!_this.nowAnimating){return;} 
            _this.zIndex++;
            _this.nowAnimating = false;

            $(nextObj).removeClass('fn-hide')
                .css({
                    'z-index':_this.zIndex,
                    'transform': 'translateX(100%)',
                    '-webkit-transform': 'translateX(100%)'
                }).animate({
                    'transform': 'translateX(0)',
                    '-webkit-transform': 'translateX(0)'},
                _this.animationDuration,
                _this.timingFunction,
                function() {
                    $(nowObj).addClass('fn-hide').removeClass(_this.activeClassName).removeAttr('style');
                    $(nextObj).addClass(_this.activeClassName);
                    _this.nowAnimating = true;
                    _this.callback && _this.callback();
                }
            );
        },
        // nowObj向右划出屏幕
        moveRightOut: function(nowObj, nextObj){
            var _this = this;
            if(!_this.nowAnimating){return;}
            _this.zIndex++;
            _this.nowAnimating = false;
            $(nowObj).css({'z-index':_this.zIndex}).animate({
                    'transform': 'translateX(100%)',
                    '-webkit-transform': 'translateX(100%)'},
                _this.animationDuration,
                _this.timingFunction,
                function() {
                    $(nowObj).addClass('fn-hide').removeClass(_this.activeClassName).removeAttr('style');
                    $(nextObj).addClass(_this.activeClassName);
                    _this.nowAnimating = true;
                    _this.callback && _this.callback();
                }
            );
            $(nextObj).removeClass('fn-hide');
        },
        // nextObj向右划入屏幕
        moveRightIn: function(nowObj, nextObj){
            var _this = this;
            if(!_this.nowAnimating){return;}
            _this.zIndex++;
            _this.nowAnimating = false;

            $(nextObj).removeClass('fn-hide')
                .css({
                    'z-index':_this.zIndex,
                    'transform': 'translateY(-100%)',
                    '-webkit-transform': 'translateX(-100%)'
                }).animate({
                    'transform': 'translateY(0)',
                    '-webkit-transform': 'translateX(0)'},
                _this.animationDuration,
                _this.timingFunction,
                function() {
                    $(nowObj).addClass('fn-hide').removeClass(_this.activeClassName).removeAttr('style');
                    $(nextObj).addClass(_this.activeClassName);
                    _this.nowAnimating = true;
                    _this.callback && _this.callback();
                }
            );
        }
    }
    window.GentlyPage = GentlyPage;

}(Zepto);