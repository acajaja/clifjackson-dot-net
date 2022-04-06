/**
 * Map JavaScript Logic
 *
 * @package Eukanuba Facebook
 * @author Clif Jackson
 * @copyright 3/2012 Clif Jackson for Organic, Inc.
 */
jQuery(document).ready(function() {
    var _active_countries = ['BE','DE','GB','GR','IT'],
    _mapSize = {h:385,w:3822},
    tooltipAdjust = typeof _qtipConfig == 'object' ? _qtipConfig.adjust : {screen:true,x:50,y:45},
    tooltipSize = typeof _qtipConfig == 'object' ? _qtipConfig.size : {x:20,y:30},
    paper = Raphael(document.getElementById('map_section'), _mapSize.w, _mapSize.h, function() {
        var r = this;
        r.setStart();
        r.setViewBox(-1130, 160, 4700, 500);
        for (var country in mapdata) {
            var is_active = (jQuery.inArray(country, _active_countries) >= 0),
            myfill = is_active ? '#FBDAEB' : '#e5e5e5',
            mypath = r.path(mapdata[country]['coords']);
            mypath.attr({stroke:"#c3c3c3", "stroke-width":1, fill:myfill, "stroke-opacity":0.7}).data('active', false);

            if (is_active) {
                mypath.mouseover(function() {
                    this.c = this.c || this.attr("fill");
                    this.stop().animate({fill:"#E03497"}, 200);
                });
                mypath.mouseout(function() { this.stop().animate({fill: this.c}, 200); });

                var fblink = typeof mapdata[country].link != 'undefined' ? mapdata[country].link : '',
                linklabel = typeof mapdata[country].label != 'undefined' ? mapdata[country].label : '',
                qtipConfig = {
                    api:{beforeShow: function() { this.updateWidth(); }},
                    position:{adjust:tooltipAdjust,corner:{target:'topMiddle',tooltip:'bottomMiddle'}},
                    hide:{delay:700,fixed:true},
                    show:{delay:100,solo:true},
                    style:{border:{width:0},width:350,padding:5,tip:{color:'#fff',corner:'bottomMiddle',size:tooltipSize}},
                    content: '<div id="myqtip-wrapper-' + country + '">'
                        + '<div class="popup_country"><h1>' + country + '</h1></div>'
                        + '<p>' + mapdata[country]['name'] + ' is available.<br>'
                        + '<a href="' + fblink + '" target="_blank">' + linklabel + '</a></p>'
                        + '</div>'
                },
                mytip = jQuery(mypath[0]).qtip(qtipConfig);
            }
        }
        var world = r.setFinish();
    });
});