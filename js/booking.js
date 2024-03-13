(function () {
    'use strict';
    var init = function () {                
        var slider = new rSlider({
            target: '#slider',
            values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            range: true,
            set: [0, 1],
            scale: true,
            tooltip: true,
            onChange: function (vals) {
                console.log(vals);
            }
        });
    };
    window.onload = init;
})();