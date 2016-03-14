/**
 * Lazy load plugin for jQuery.
 *
 * @author Simon Sessingø
 * @version 2.0
 */

function lazyload(options) {
    this.init(options);
}

lazyload.prototype = {
    options: {
        onload: null,
        onerror: null,
        dataAttribute: 'img'
    },
    init: function(options) {
        this.options = $.extend(this.options, options);
    },
    preloadElement: function(el) {
        var self = this;
        var imgUrl = '';
        var isImage = false;

        if(el.get(0).tagName.toLowerCase() == 'img') {
            imgUrl = el.attr('src');
            $(this).removeAttr('src');
            isImage = true;
        } else {
            imgUrl = el.data(self.options.dataAttribute);
        }

        this.preload(imgUrl, {
            load: function() {
                if(isImage) {
                    el.attr('src', imgUrl);
                }
                if(self.options.onload != null) {
                    self.options.onload(el, imgUrl, self);
                }
            },
            error: function() {
                if(self.options.onerror != null) {
                    self.options.onerror(el, e, self);
                }
            }
        });
    },
    preload: function(imgUrl, options) {
        var self = this;
        var img = $('<img/>').attr('src', imgUrl).hide().load(function() {
            $(this).remove();
            if(options.load != null) {
                options.load();
            }
        }).error(function(e) {
            $(this).remove();
            if(options.error != null) {
                options.error(e);
            }
        });
        $('body').append(img);
    }
};

(function($) {

    $.fn.lazyload = function(options) {
        var el = $(this);
        var ll = new lazyload(options);
        el.each(function() {
            ll.preloadElement($(this));
        });
    };
}(jQuery));
