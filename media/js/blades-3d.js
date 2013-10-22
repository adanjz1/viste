/* --------------------------------------------- */
/* Author: http://codecanyon.net/user/CodingJack */
/* --------------------------------------------- */

/* 
	--------------------------------------
	IMPORTANT! This is jQuick, NOT jQuery!
	--------------------------------------
	
	jQuick IS similar to jQuery however.
	You can learn about the differences here:
	http://www.codingjack.com/playground/jquick/
	
*/

/* JSHINT */
/* global jQuick */
/* jshint smarttabs:true */

(function($) {
	
	// 'use strict';
			
	var defaults = {
		
		cols: 7,
		rows: 3,
		width: 700,
		height: 300,
		spacing: 10,
		useRetina: true,
		randomize: false,
		responsive: true,
		autoplay: false,
		autoplayDelay: 4000,
		transition3d: true,
		transitionType: 'mixed',
		transitionAllDelay: 75,
		transitionColsDelay: 100,
		transitionRowsDelay: 250,
		scaledHidesCaptions: false,
		rightClickCallback: null,
		leftClickCallback: null
		
	},
	
	resizer,
	blades = [],
	browser = $.browser(),
	version = $.version(),
	touch = $.touchEnabled,
	transform = $.transforms(),
	modern = browser !== 'safari' || version > 5,
	retina = window.devicePixelRatio && window.devicePixelRatio > 1,
	canTransform = transform && $.transitions() && browser !== 'opera';
	
	$.fn('blades', function(settings) {
		
		return this.each(function() {
			
			new Blades(this, settings);
			
		});
		
	});
	
	// init
	function Blades(el, sets) {
		
		var frag = document.createDocumentFragment(),
		settings = $.extend({}, defaults),
		$this = this.banner = $(el),
		
		slideStyle = {visibility: 'visible', display: 'none'},
		attrs = el.attributes,
		len = attrs.length,
		slides = [],
		transition,
		hasControl,
		hasRetina,
		middleCol,
		middleRow,
		container,
		controls,
		autoplay,
		goTrans,
		styles,
		theCol,
		theRow,
		length,
		height,
		square,
		front,
		backs,
		width,
		items,
		right,
		left,
		name,
		theX,
		theY,
		att,
		xx,
		yy,
		i;
		
		// if JS params were passed
		if(sets) $.extend(settings, sets);
		
		// check if data attributes were set
		for(i = 0; i < len; i++) {
		
			att = attrs[i];
			name = att.name;
			
			if(name.search('data-') !== -1) {
				
				name = name.split('data-')[1];
				if(name.search('-') !== -1) name = upper(name);
			
				settings[name] = att.value;
				
			}
			
		}
		
		width = this.width = parseInt(settings.width, 10);
		height = this.height = parseInt(settings.height, 10);
		styles = {width: width, height: height};
		
		goTrans = this.canTransform = canTransform && settings.transition3d.toString() === 'true';
		items = $this.css(styles).children('.blades-slide').css(styles).toArray();
		hasRetina = retina && settings.useRetina.toString() === 'true';
		length = this.length = items.length;
		
		if(settings.randomize.toString() === 'true') {
		
			var shuf = [], placer;
			for(i = 0; i < length; i++) shuf[i] = items[i];
			items = [];
				
			while(shuf.length > 0) { 
								
				placer = (Math.random() * shuf.length) | 0;
				items[items.length] = shuf[placer];
				shuf.splice(placer, 1);
								
			}
			
		}
		
		for(i = 0; i < length; i++) {
			
			slides[i] = new Slide(items[i], this, slideStyle, hasRetina);
			
		}
		
		this.slides = slides;
		controls = $this.children('.blades-controls');
		
		if(controls.length) {
			
			left = controls.children('.blades-btn-left');
			right = controls.children('.blades-btn-right');
			
			if(left.length) {
			
				hasControl = true;
				this.left = left.data({banner: this, left: true}).on('click', buttonClick).domElement();
				
			}
			if(right.length) {
			
				hasControl = true;
				this.right = right.data('banner', this).on('click', buttonClick).domElement();
				
			}
			
			if(hasControl) {
				
				this.controls = controls;
				if(modern) controls.addClass('blades-controls-trans');
				
				if(browser !== 'msie' || version > 8) controls.addClass('blades-controls-fix');
				if(browser === 'msie' && version > 9) controls.addClass('blades-btn-ie10');
					
			}
			
		}
		
		if(settings.responsive.toString() === 'true' && canTransform && (modern || touch)) {
			
			this.element = el;
			this.par = $this.parent();
			this.margin = parseInt($this.css('margin-bottom'), 10);
			this.hideCaptions = settings.scaledHidesCaptions.toString() === 'true';
			
			blades[blades.length] = this;
			sizer();
			
			$(window).on('resize', resized);
				
		}
		
		var spacing = -parseInt(settings.spacing, 10),
		rows = parseInt(settings.rows, 10),
		cols = parseInt(settings.cols, 10),
		total = this.total = rows * cols,
		iTotal = this.iTotal = total - 1,
		
		high = (height / rows) | 0,
		wid = (width / cols) | 0,
		colVal = cols % 2 === 1,
		rowVal = rows % 2 === 1,
		midX = (cols - 1) >> 1,
		midY = (rows - 1) >> 1,
		panels = [],
		
		plane = {width: wid, height: high};
		styles = {width: wid, height: high};
		
		if(colVal) middleCol = (cols / 2) | 0;
		if(rowVal) middleRow = (rows / 2) | 0;
		if(hasRetina) plane.backgroundSize = width + 'px ' + height + 'px';
		
		// create each square
		for(i = 0; i < total; i++) {
			
			theCol = i % cols;
			theRow = (i / cols) | 0;
			
			theX = wid * theCol;
			theY = high * theRow;
			
			if(colVal) {
		
				if(theCol !== middleCol) {
					
					xx = theCol < middleCol ? theX + (spacing * (middleCol - theCol)) : 
						 theCol > middleCol ? theX - (spacing * (theCol - middleCol)) : 
						 theX;
						
				}	
				else {
					
					xx = theX;
					
				}
						   
			}
			else {
				
				xx = theCol < midX ? theX + (spacing * (midX - theCol)) : 
					 theX - (spacing * (theCol - midX));
					
			}
				
			if(rowVal) {
				
				if(theRow !== middleRow) {
					
					yy = theRow < middleRow ? theY + (spacing * (middleRow - theRow)) : 
						 theRow > middleRow ? theY - (spacing * (theRow - middleRow)) : 
						 theY;
						
				}	
				else {
					
					yy = theY;
					
				}
							   
			}
			else {
				
				yy = theRow < midY ? theY + (spacing * (midY - theRow)) : 
					 theY - (spacing * (theRow - midY));
					
			}
			
			styles.top = yy;
			styles.left = xx;
			plane.backgroundPosition = -(wid * theCol) + 'px ' + -(high * theRow) + 'px';
			
			front = $('<span />').css(plane).addClass('blades-plane');
			backs = $('<span />').css(plane).addClass('blades-plane');
			
			if(!goTrans) {
			
				front.data('instance', this);
				backs.data('instance', this);
				
			}
			
			square = $('<div />').data({
				
				front: front,
				backs: backs
				
			}).addClass('blades-panel').css(styles).append(front).append(backs);
			
			if(i === iTotal) square.data('instance', this);
			
			panels[i] = {
				
				xx: xx, 
				yy: yy, 
				x: theX, 
				y: theY, 
				row: theRow,
				col: theCol,
				front: front,
				backs: backs,
				square: square
				
			};
			
			frag.appendChild(square.domElement());
			
		}
		
		container = document.createElement('div');
		container.className = 'blades-container';
		container.appendChild(frag);
		
		el.insertBefore(container, el.firstChild);
		transition = settings.transitionType;
		
		if(transition === 'mixed') {
			
			this.mixed = true;
			this.transition = 0;
			
		}
		else {
		
			switch(transition) {
			
				case 'vertical':
					
					this.transition = 0;
				
				break;
				
				case 'horizontal':
					
					this.transition = 1;
				
				break;
				
				case 'verticalRows':
					
					this.transition = 2;
				
				break;
				
				case 'horizontalRows':
					
					this.transition = 3;
				
				break;
				
				case 'verticalCols':
					
					this.transition = 4;
				
				break;
				
				default:
					
					this.transition = 5;
				
				// end switch
				
			}
			
		}
		
		autoplay = this.autoplay = settings.autoplay.toString() === 'true';
		
		if(autoplay || touch) {
			
			$this.data('banner', this);
			if(!touch) $this.on('mouseenter', over).on('mouseleave', out);
			
		}
		
		this.isOn = 0;
		this.panels = panels;
		this.currentSlide = slides[0];
		this.numChil = $this.children().length;
		this.leftCallback = settings.leftClickCallback;
		this.rightCallback = settings.rightClickCallback;
		this.delay = parseInt(settings.autoplayDelay, 10);
		this.allDelay = parseInt(settings.transitionAllDelay, 10);
		this.colDelay = parseInt(settings.transitionColsDelay, 10);
		this.rowDelay = parseInt(settings.transitionRowsDelay, 10);
		
		$this = this;
		setTimeout(function() {$this.loadSlide();}, 250);
		
	}
	
	Blades.prototype = {
		
		// expands/contracts the squares
		move: function(squeeze) {
			
			var canTransform = this.canTransform,
			panels = this.panels, 
			iTotal = this.iTotal,
			total = this.total,
			settings,
			callback,
			panel,
			sets,
			pos,
			x,
			y,
			i;
			
			if(!canTransform) pos = {};
			if(squeeze) {
			
				settings = {duration: 300};
				callback = {duration: 300, onComplete: contracted};
				
			}
					
			else {
				
				settings = {duration: 300, ease: 'Cubic.easeOut'};
				callback = {duration: 300, ease: 'Cubic.easeOut', onComplete: expanded};
				
			}
			
			for(i = 0; i < total; i++) {
				
				panel = panels[i];
				
				if(!squeeze) {
				
					x = panel.xx;
					y = panel.yy;
					
				}
				else {
				
					x = panel.x;
					y = panel.y;
					
				}
					
				sets = i < iTotal ? settings : callback; 
				
				if(canTransform) {
					
					panel.square.transform('animate', {left: x, top: y}, sets);
					
				}
				else {
					
					pos.top = y;
					pos.left = x;
					panel.square.animate(pos, sets);
					
				}
				
			}

		},
		
		// if the image hasn't been loaded, loads in the image before the flip begins
		loadSlide: function() {
			
			var slide = this.currentSlide;
			
			if(slide.loaded) {
			
				this.flip();
											
			}
			else {
				
				var img = $('<img />').data('slide', slide).one('load', loaded);
				img.attr('src', slide.src);
				
			}
			
		},
		
		// 3D rotations
		flip: function() {
			
			var styles = {backgroundImage: 'url(' + this.currentSlide.src + ')'},
			transition = this.transition,
			allDelay = this.allDelay,
			rowDelay = this.rowDelay,
			colDelay = this.colDelay,
			flipped = this.flipped,
			panels = this.panels, 
			iTotal = this.iTotal,
			total = this.total,
			mixed = this.mixed,
			planeOne,
			planeTwo,
			settings,
			square,
			panel,
			i;
			
			if(!flipped) {
			
				planeOne = 'front';
				planeTwo = 'backs';
				
			}
			else {
			
				planeOne = 'backs';
				planeTwo = 'front';
				
			}
			
			if(this.canTransform) {
				
				var trans,
				rotations,
				midFlip,
				axisOne,
				axisTwo,
				change,
				degree;
				
				if(transition % 2) {
					
					axisOne = 'Y';
					axisTwo = 'X';
					
				}
				else {
				
					axisOne = 'X';
					axisTwo = 'Y';
					
				}
				
				if(mixed || !flipped) {
					
					degree = '180';
					trans = '90';
					
				}
				else {
				
					degree = '360';
					trans = '270';
					change = true;
					
				}
				
				rotations = 'rotate' + axisOne + '(' + trans + 'deg)';
				trans = {transform: rotations + ' skew' + axisOne + '(15deg)'};
				styles[transform] = 'rotate' + axisOne + '(' + degree + 'deg)';
				midFlip = {transform: 'rotate' + axisOne + '(' + degree + 'deg) skew' + axisOne + '(0deg)'};
				
				if(!change) rotations = null;
				settings = {ease: 'Quint.easeIn', onComplete: midway, onCompleteParams: [flipped, axisOne, midFlip, rotations]};
				
				for(i = 0; i < total; i++) {
					
					panel = panels[i];
					square = panel.square;
					
					panel[planeOne].css(styles);
					panel[planeTwo].css(transform, 'rotate' + axisTwo + '(0deg)');
					
					settings.delay = (transition < 2 ? i * allDelay : transition < 4 ? panel.row * rowDelay : panel.col * colDelay) + 30;
					if(i === iTotal) settings.onCompleteParams = [flipped, axisOne, midFlip, rotations, true];
					
					square.css(transform, 'rotate' + axisTwo + '(0deg)').transform('animate', trans, settings);
					
				}
				
			}
			// fallback transition
			else {
				
				settings = {};
				styles.zIndex = 1;
				styles.opacity = 0;
				
				for(i = 0; i < total; i++) {
					
					panel = panels[i];
					square = panel.square;
					panel[planeTwo].css('z-index', 0);
					
					settings.delay = transition < 2 ? i * allDelay : transition < 4 ? panel.row * rowDelay : panel.col * colDelay;
					if(i === iTotal) settings.onComplete = squeeze;
					
					panel[planeOne].css(styles).fadeIn(settings);
					
				}
				
			}

			if(this.mixed) this.transition = transition < 5 ? transition + 1 : 0;
			
		},
		
		// slide has contracted
		done: function() {
			
			var currentSlide = this.currentSlide,
			info = currentSlide.info,
			controls = this.controls;
			
			if(info) {
			
				var styles = {zIndex: 0, display: 'none'},
				i = currentSlide.infoLength,
				prevSlide = this.prevSlide;
				
				if(prevSlide) prevSlide.container.css(styles);
				while(i--) info[i][0].css('visibility', 'hidden');
				
				styles.zIndex = this.numChil;
				styles.display = 'block';
				
				currentSlide.container.css(styles);
				currentSlide.infoOn = 0;
				currentSlide.runInfo();
				
			}
			else if(this.autoplay) {
				
				this.startTimer();

			}
			
			if(controls) controls.addClass('blades-controls-on');
			if(touch) this.banner.swipe(buttonClick);
			
			this.running = false;
			
		},
		
		// for autoplay
		startTimer: function() {
		
			this.isReady = true;	
			if(this.isOver) return;
			
			var $this = this;
			
			this.timer = setTimeout(function() {
			
				$this.next();
				
			}, this.delay);
			
		},
		
		// run the next slide
		next: function(prev) {
			
			this.running = true;
			this.isReady = false;
			if(touch) this.banner.removeSwipe();
			
			var isOn = this.isOn, 
			controls = this.controls,
			currentSlide = this.currentSlide;
			
			if(controls) controls.removeClass('blades-controls-on');
			currentSlide.container.hide();
			this.prevSlide = currentSlide;
			
			if(!prev) {
				
				if(this.rightCallback) this.rightCallback();
				this.isOn = isOn = isOn < this.length - 1 ? isOn + 1 : 0;
				
			}
			else {
				
				if(this.leftCallback) this.leftCallback();
				this.isOn = isOn = isOn > 0 ? isOn - 1 : this.length - 1;
				
			}
			
			this.currentSlide = this.slides[isOn];
			this.move();
			
		}
		
	};
	
	// square has flipped mid-way, swap the planes and finish rotation
	function midway(flipped, axis, to, rotations, callback) {
		
		var $this = $(this),
		data = $this.data(),
		settings;
		
		if(!flipped) {
			
			data.backs.hide();
			data.front.show();
			
		}
		else {
			
			data.front.hide();
			data.backs.show();
			
		}
		
		if(rotations) this.style[transform] = rotations + ' skew' + axis + '(-15deg)';
		if(callback) settings = {onComplete: squeeze};
		
		$this.transform('animate', to, settings);
		
	}
	
	// slide instance
	function Slide($this, banner, styles, useRetina) {
		
		var length, info = [], ret = $this.attr('data-retina');
		
		this.container = $this;
		this.banner = banner;
		this.src = useRetina && ret ? ret : $this.attr('data-img');
		
		$this.children('span').each(infoEach, [info, this]);
		length = info.length;
		$this.css(styles);
		
		this.info = length ? info : null;
		this.infoLength = length;
		
	}
	
	Slide.prototype = {
		
		// animate info
		runInfo: function() {

			if(this.infoOn < this.infoLength) { 
				
				var data = this.info[this.infoOn], clipped;
				
				if(data[0] === 'left') {
					
					clipped = 'rect(0px, 0px, ' + data[3] + 'px, 0px)';
					
				}
				else {
				
					var w = data[2];
					clipped = 'rect(0px, ' + w + 'px, ' + data[3] + 'px, ' + w + 'px)';
					
				}
				
				this.infoOn++;
				data[0].css({clip: clipped, visibility: 'visible'}).tick(this.settings);
				
			}
			else {
				
				var banner = this.banner;
				if(banner.autoplay) banner.startTimer();
				
			}
			
		},
		
		settings: {onUpdate: tweenInfo}
		
	};
	
	// onUpdate/step for info animation
	function tweenInfo(tick) {
		
		if(this.cjAlign === 'left') {
			
			this.style.clip = 'rect(0px, ' + (this.cjWidth * tick) + 'px, ' + this.cjHeight + 'px, 0px)';
			
		}
		else {
			
			var w = this.cjWidth;
			this.style.clip = 'rect(0px, ' + w + 'px, ' + this.cjHeight + 'px, ' + (w * (1 - tick)) + 'px)';
			
		}
		
		if(tick === 1) this.cjSlide.runInfo();
		
	}
	
	// slide image loaded
	function loaded() {
		
		var slide = this.data('slide');
		
		slide.loaded = true;
		slide.banner.flip();
		
	}
	
	// squares have broken apart
	function expanded() {
		
		$(this).data('instance').loadSlide();
		
	}
	
	// squares have moved to natural position
	function contracted() {
		
		$(this).data('instance').done();
		
	}
	
	// squares have flipped 
	function squeeze() {
		
		var instance = $(this).data('instance');
		instance.flipped = !instance.flipped;
		instance.move(true);
		
	}
	
	// left/right button click and touch swipe
	function buttonClick(event) {
		
		var data, banner, direct;
		
		if(typeof event === 'object') {
			
			data = this.data();
			banner = data.banner;
			direct = data.left;
			
		}
		else {
			
			banner = this.data('banner');
			direct = event === 'left';
			
		}
		
		if(banner.running) return;
		clearTimeout(banner.timer);
		
		banner.next(direct);
		
	}
	
	// mouseenter, pause autoplay
	function over() {
	
		var banner = this.data('banner');
		
		clearTimeout(banner.timer);
		banner.isOver = true;
		
	}
	
	// mouseleave, check autoplay
	function out() {
		
		var banner = this.data('banner');
		banner.isOver = false;
		
		if(banner.isReady) banner.startTimer();
		
	}
	
	// convert data attribute names to camel-case
	function upper(st) {
	
		var ar = st.split('-'),
		len = ar.length,
		str = ar[0],
		i;
		
		for(i = 1; i < len; i++) {
				
			st = ar[i];
			str += st.charAt(0).toUpperCase() + st.substring(1, st.length);
			
		}
		
		return str;
		
	}
	
	// info instance
	function infoEach(info, slide) {
		
		var $this = $(this),
		text = $this.html();
		if(!text) return;
			
		var align = $this.attr('data-align') || 'left',
		x = parseInt($this.attr('data-x'), 10),
		y = parseInt($this.attr('data-y'), 10),
		bg = $this.attr('data-background'),
		color = $this.attr('data-color'),
		height = $this.outerHeight(),
		width = $this.outerWidth(),
		length = info.length,
		styles;
		
		if(isNaN(x)) x = 0;
		if(isNaN(y)) y = 0;
		
		styles = {top: y};
		styles[align] = x;
		
		if(color) styles.color = color;
		if(bg) styles.background = bg;
		
		this.cjSlide = slide;
		this.cjAlign = align;
		this.cjWidth = width;
		this.cjHeight = height;
		
		info[length] = [$this.css(styles), align, width, height, y, (height * length) + (length * 10) + 10, align, x];

	}
	
	// window resized
	function resized() {
	
		clearTimeout(resizer);
		resizer = setTimeout(sizer, 100);
		
	}
	
	// resize banner
	function sizer() {
		
		var i = blades.length,
		styles = {},
		newWidth,
		oldWidth,
		caption,
		scaled,
		banner,
		slides,
		slide,
		blade,
		align,
		plus,
		info,
		hide,
		j,
		k;
		
		while(i--) {
			
			blade = blades[i];
			oldWidth = blade.parentWidth;
			newWidth = Math.max(blade.par.width(), 320);
			
			if(oldWidth === newWidth) continue;
			
			banner = blade.banner;
			slides = blade.slides;
			
			scaled = Math.min(newWidth / blade.width, 1).toFixed(2);
			hide = blade.hideCaptions;
			j = blade.length;
			
			if(scaled < 1) {
				
				plus = (1 - parseFloat(scaled)) + 1;
				if(scaled < 0.5) plus += 0.5;
				banner.addClass('blades-responsive');
				
			}
			else {
			
				plus = 1;
				banner.removeClass('blades-responsive');
				
			}
			
			while(j--) {
				
				slide = slides[j];
				info = slide.info;
				if(!info) continue;
				
				k = slide.infoLength;
				
				while(k--) {
					
					caption = info[k];
					
					if(!hide) {
						
						align = caption[6];
						
						if(align === 'left') {
							
							 if(styles.hasOwnProperty('right')) delete styles.right;
							 
						}
						else {
						
							 if(styles.hasOwnProperty('left')) delete styles.left;
							
						}
						
						if(scaled < 1) {
						
							styles.top = (caption[5] * plus) | 0;
							styles[align] = 10;
							
						}
						else {
							
							styles.top = caption[4];
							styles[align] = caption[7];
							
						}
						
						styles[transform] = 'scale(' + plus + ', ' + plus + ')';
						caption[0].css(styles);
						
					}
					else {
						
						if(scaled < 1) {
						
							caption[0].addClass('blades-hide-info');
							
						}
						else {
						
							caption[0].removeClass('blades-hide-info');
							
						}
						
					}
					
				}
				
			}
			
			if(blade.left) blade.left.style[transform] = 'scale(' + plus + ', ' + plus + ')';
			if(blade.right) blade.right.style[transform] = 'scale(' + plus + ', ' + plus + ')';
			
			styles = {marginBottom: blade.margin - (blade.height - (blade.height * scaled))};
			styles[transform] = 'scale(' + scaled + ', ' + scaled + ')';
			
			banner.css(styles);
			blade.parentWidth = newWidth;
			
		}
		
	}
	
	
})(jQuick);