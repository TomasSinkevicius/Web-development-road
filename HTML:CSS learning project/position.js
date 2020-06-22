$( document ).ready(function() {
    $.fn.followTo = function (pos) {
        var $this = this,
            $window = $(window);
    
        $window.scroll(function (e) {
            if ($window.scrollTop() > pos) {
                $this.css({
                    position: 'absolute',
                    top: pos
                });
            } else {
                $this.css({
                    position: 'fixed',
                    top: 0
                });
            }
        });
    };
    
    $('#block-menu').followTo(683);
});
