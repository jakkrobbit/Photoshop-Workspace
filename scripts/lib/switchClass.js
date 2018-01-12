;(function ($, window, document, undefined) {

    "use strict";

    $.fn.switchClass = function (newclass, oldclass) {
        return this.addClass(newclass).removeClass(oldclass);
    };

})(jQuery, window, document);
