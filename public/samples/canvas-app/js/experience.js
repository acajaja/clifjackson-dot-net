var Experience = function(config) {
    /**
     * The Experience rendering engine
     *
     * See http://arborjs.org/reference for detailed explanations
     * The renderObj var below is what gets returned to the particle sys renderer.
     * It has a minimum of two methods: init & redraw. More have been added to
     * accomodate mouse movement, click events, and screen resizing.
     *
     * @return Object instanceof experienceRenderingEngine
     */
    var experienceRenderingEngine = function() {
        var domElem = document.getElementById(config.canvasId),
        context = domElem.getContext('2d'),
        enlargeBy = 20,
        linkHitArea = [40, 21],
        linkEnabled = false,
        images = [],
        imageDir = 'images/',
        jQueryElem = $(domElem),
        particleSystem = null,
        selected = null,
        cWidth = domElem.width = $(window).width(),
        cHeight = domElem.height = $(window).height(),
        renderObj = {
            init: function(pSys) {
                var loadCount = 0;
                particleSystem = pSys;
                particleSystem.screen({size: {width: cWidth, height: cHeight}, padding: [120, 150, 180, 150]});
                $(window).resize(renderObj.resize);
                renderObj.resize();
                renderObj._initMouseHandling();
                particleSystem.eachNode(function(node, pt) {
                    var newIndex = node._id - 1;
                    images[newIndex] = {img: null, loaded: false};
                    images[newIndex].img = new Image();
                    images[newIndex].img.onload = function() {
                        loadCount += 1;
                        images[newIndex].loaded = true;
                    };
                    images[newIndex].img.src = imageDir + node.data.filename;
                });
            },
            redraw: function() {
                // Clear the canvas on each pass to avoid "trailing"
                context.clearRect(0, 0, cWidth, cHeight);
                //The lines between nodes
                particleSystem.eachEdge(function(edge, pt1, pt2){
                    context.strokeStyle = '#7f7f7f';
                    context.lineWidth = 0.7;
                    context.beginPath();
                    context.moveTo(pt1.x, pt1.y);
                    context.lineTo(pt2.x, pt2.y);
                    context.stroke();
                });
                // Render each image to its new x, y
                // Enlarge the image on hover state
                particleSystem.eachNode(function(node, pt) {
                    var newIndex = node._id - 1;
                    if ((selected != null && selected.node._id == node._id)) {
                        var newH = node.data.height + enlargeBy,
                        newW = node.data.width + enlargeBy,
                        newX = (pt.x - (newW / 2)),
                        newY = (pt.y - (newH / 2));
                    }
                    else {
                        var newH = node.data.height,
                        newW = node.data.width,
                        newX = (pt.x - (node.data.width / 2)),
                        newY = (pt.y - (node.data.height / 2));
                    }
                    if (images[newIndex].loaded) context.drawImage(images[newIndex].img, newX, newY, newW, newH);
                });
            },
            resize: function() {
                cWidth = domElem.width = $(window).width();
                cHeight = domElem.height = $(window).height();
                particleSystem.screenSize(cWidth, cHeight);
            },
            _initMouseHandling: function(){
                var nearest = null,
                dragged = null,
                _mouseP = null,
                oldmass = 0.1;

                var handler = {
                    moved: function(e) {
                        var pos = jQueryElem.offset();
                        _mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top);
                        nearest = particleSystem.nearest(_mouseP);

                        if (!nearest.node) return false;

                        var nearestX = Math.round(nearest.screenPoint.x),
                        nearestY = Math.round(nearest.screenPoint.y),
                        hWidth = linkEnabled ? (nearest.node.data.width + enlargeBy) / 2 : nearest.node.data.width / 2,
                        hHeight = linkEnabled ? (nearest.node.data.height + enlargeBy) / 2 : nearest.node.data.height / 2,

                        leftX = nearestX - hWidth,
                        rightX = nearestX + hWidth,
                        topY = nearestY - hHeight,
                        bottomY = nearestY + hHeight;

                        if (
                            (_mouseP.x >= leftX && _mouseP.x <= rightX)
                            && (_mouseP.y >= topY && _mouseP.y <= bottomY)
                        ) {
                            $('body').toggleClass('grab-cursor', true);
                            selected = nearest;

                            var linkX2 = rightX - selected.node.data.linkIndent,
                            linkX1 = linkX2 - 50,
                            linkY = bottomY - 25;

                            if (
                                (_mouseP.x >= linkX1 && _mouseP.x <= linkX2)
                                && (_mouseP.y >= linkY && _mouseP.y <= bottomY - 2)
                            ) {
                                linkEnabled = true;
                                document.body.style.cursor = "pointer";
                            }
                            else {
                                linkEnabled = false;
                                document.body.style.cursor = "";
                            }
                        }
                        else {
                            $('body').toggleClass('grab-cursor', false);
                            selected = null;
                        }

                        return false;
                    },
                    clicked: function(e) {
                        var pos = jQueryElem.offset();
                        _mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top);
                        nearest = dragged = particleSystem.nearest(_mouseP);

                        if (linkEnabled) {
                            location.href = selected.node.data.url;
                            return false;
                        }

                        $('body').toggleClass('grabbing-cursor', true);
                        if (dragged && dragged.node !== null) dragged.node.fixed = true

                        jQueryElem.unbind('mousemove', handler.moved);
                        jQueryElem.bind('mousemove', handler.dragged);
                        $(window).bind('mouseup', handler.dropped);

                        return false;
                    },
                    dragged: function(e) {
                        var old_nearest = nearest && nearest.node._id,
                        pos = jQueryElem.offset(),
                        s = arbor.Point(e.pageX - pos.left, e.pageY - pos.top);

                        if (!nearest) return;

                        if (dragged !== null && dragged.node !== null) {
                            var p = particleSystem.fromScreen(s);
                            dragged.node.p = p;
                        }

                        return false;
                    },
                    dropped: function(e) {
                        if (dragged === null || dragged.node === undefined) return;
                        if (dragged.node !== null) dragged.node.fixed = false;
                        dragged.node.tempMass = 1000;
                        dragged = null;
                        $('body').toggleClass('grabbing-cursor', false);
                        // selected = null;
                        jQueryElem.unbind('mousemove', handler.dragged);
                        $(window).unbind('mouseup', handler.dropped);
                        jQueryElem.bind('mousemove', handler.moved);
                        _mouseP = null;
                        return false;
                    }
                }

                jQueryElem.mousedown(handler.clicked);
                jQueryElem.mousemove(handler.moved);
            }
        };

        return renderObj;
    };

    var experienceBank = {
        nodes: {
            'image-1': {filename: '01-slide.jpg', height: 229, linkIndent: 33, url: 'blank.html', width: 230},
            'image-2': {filename: '02-slide.jpg', height: 209, linkIndent: 89, url: 'blank.html', width: 272},
            'image-3': {filename: '03-slide.jpg', height: 189, linkIndent: 120, url: 'blank.html', width: 274},
            'image-4': {filename: '04-slide.jpg', height: 154, linkIndent: 21, url: 'blank.html', width: 274},
            'image-5': {filename: '05-slide.jpg', height: 178, linkIndent: 38, url: 'blank.html', width: 239},
            'image-6': {filename: '06-slide.jpg', height: 217, linkIndent: 3, url: 'blank.html', width: 198},
            'image-7': {filename: '07-slide.jpg', height: 189, linkIndent: 110, url: 'blank.html', width: 274},
            'image-8': {filename: '08-slide.jpg', height: 148, linkIndent: 135, url: 'blank.html', width: 285},
            'image-9': {filename: '09-slide.jpg', height: 188, linkIndent: 28, url: 'blank.html', width: 243}
        },
        edges: {
            'image-1': {'image-2': {length: 12}},
            'image-2': {'image-3': {length: 11}},
            'image-3': {'image-4': {length: 10}},
            'image-4': {'image-5': {length: 11}},
            'image-5': {'image-6': {length: 10}},
            'image-6': {'image-7': {length: 10}},
            'image-7': {'image-8': {length: 11}},
            'image-8': {'image-9': {length: 10}}
        }
    };

    var experienceAnime = arbor.ParticleSystem({dt: 0.03, fps: 12, friction: 0.3, gravity: false, mass: 1000, precision: 0.1, repulsion: 500});
    experienceAnime.renderer = experienceRenderingEngine(config.canvasId);
    experienceAnime.graft(experienceBank);
}