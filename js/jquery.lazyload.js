/**
 * Lazy load plugin for jQuery.
 *
 * Usage:
 * $('img.lazyLoad').lazy({
 *      onload: function(el, imgUrl) {
 *          $(this).addClass('loaded');
 *      },
 *      onerror: function(e) {
 *
 *      }
 * });
 *
 * @author Simon Sessingø
 * @version 1.1
 */

(function($) {
    var preload = function(imgUrl, loadCallback, errorCallback) {
        var img = $('<img/>').attr('src', imgUrl).hide().load(function() {
            $(this).remove();
            loadCallback();
        }).error(function(e) {
            $(this).remove();
            if(errorCallback != null) {
                errorCallback(e);
            }
        });
        $('body').append(img);
    };

    var defaultOptions = { onload: null, onerror: null };

    $.fn.lazyload = function(options) {
        var el = $(this);
        var options = $.extend(this.options, options);
        el.each(function() {
            var self = $(this);
            var imgUrl = '';
            var isImage = false;
            if(self.get(0).tagName.toLowerCase() == 'img') {
                imgUrl = self.attr('src');
                $(this).removeAttr('src');
                isImage = true;
            } else {
                imgUrl = self.data('img');
            }

            preload(imgUrl, function() {
                if(isImage) {
                    self.attr('src', imgUrl);
                }

                if(options.onload != null) {
                    options.onload(self, imgUrl);
                }
            }, options.onerror);
        });
    };
}(jQuery));