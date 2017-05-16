/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});


/*
equalheight = function(container){

  var currentTallest = 0,
       currentRowStart = 0,
       rowDivs = new Array(),
       $el,
       topPosition = 0;

  $(container).each(function() {

    $el = $(this);
    $($el).height('auto');
    topPostion = $el.position().top;

    if (currentRowStart != topPostion) {
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }

      rowDivs.length = 0; // empty the array
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    }
    else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }

    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }

  });
}
*/

/**
 * Polyfill: .toISOString
 * Used for eg Google API
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 */

if (!Date.prototype.toISOString) {
    (function() {

        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

      Date.prototype.toISOString = function() {
          return this.getUTCFullYear() +
              '-' + pad(this.getUTCMonth() + 1) +
              '-' + pad(this.getUTCDate()) +
              'T' + pad(this.getUTCHours()) +
              ':' + pad(this.getUTCMinutes()) +
              ':' + pad(this.getUTCSeconds()) +
              '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
              'Z';
      };

    }());
}

"use strict";

if (typeof TML == 'undefined') var TML={};

TML.YoutubeList = (function () {

    var youtubeList = {};
    var channelId = 'UCsN8M73DMWa8SPp5o_0IAQQ';
    var playlistId = 'UUsN8M73DMWa8SPp5o_0IAQQ';
    var apiKey = 'AIzaSyDLnvJSk_UuRPIFZyaJb5rf_CufJSw4cos';
    var listElement = '.block__video-list';
    var navigationElement = '.block__tab-navigation';
    var placeholderHtml = '';
    var recentVideos = [];
    var popularVideos = [];

    youtubeList.init = function()
    {
        $(navigationElement + ' .newest a').click(youtubeList.onRecentClick);
        $(navigationElement + ' .popular a').click(youtubeList.onPopularClick);
        placeholderHtml = $(listElement).html();

        youtubeList.showRecent();
    };

    youtubeList.onRecentClick = function(event)
    {
        event.preventDefault();
        youtubeList.showRecent();
    };

    youtubeList.onPopularClick = function(event)
    {
        event.preventDefault();
        youtubeList.showPopular();
    };

    youtubeList.showRecent = function()
    {
        $(navigationElement + ' .newest').addClass('active');
        $(navigationElement + ' .popular').removeClass('active');

        getRecentData();
    };

    youtubeList.showPopular = function()
    {
        $(navigationElement + ' .newest').removeClass('active');
        $(navigationElement + ' .popular').addClass('active');

        getPopularData();
    };

    function placeholderList()
    {
        $(listElement).html(placeholderHtml);
    }

    function emptyList() {
        $(listElement).html('');
    }

    function getRecentData()
    {
        if (recentVideos.length === 0) {
            placeholderList();

            $.ajax({
              url: "https://www.googleapis.com/youtube/v3/playlistItems?part=id%2Csnippet&maxResults=2&playlistId=" + playlistId + "&fields=items%2Fsnippet&key=" + apiKey,
            })
            .done(getRecentDataCallback);

            return;
        }

        fillRecentList();
    }

    function getRecentDataCallback(data)
    {
        //console.log(JSON.stringify(data.items));
        recentVideos = data.items;
        fillRecentList();
    }

    function getPopularData()
    {
        if (popularVideos.length === 0) {
            placeholderList();

            // Get today minus 1 year in date
            var date = new Date();
            date.setFullYear(date.getFullYear() - 1);

            $.ajax({
              url: "https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=" + channelId + "&maxResults=2&order=viewCount&publishedAfter=" + date.toISOString() + "&type=video&key=" + apiKey,
            })
            .done(getPopularDataCallback);

            return;
        }

        fillPopularList();
    }

    function getPopularDataCallback(data)
    {
        //console.log(JSON.stringify(data.items));
        popularVideos = data.items;
        fillPopularList();
    }

    function fillRecentList()
    {
        emptyList();

        $.each(recentVideos, function(i, video) {
            youtubeList.addVideo(video.snippet, video.snippet.resourceId.videoId);
        });
    }

    function fillPopularList()
    {
        emptyList();

        $.each(popularVideos, function(i, video) {
            youtubeList.addVideo(video.snippet, video.id.videoId);
        });
    }

    youtubeList.addVideo = function(snippet, videoId)
    {
        var publishedAt = Date.parse(snippet.publishedAt);
        var date = timeSince(publishedAt);

        // Untill more browsers support template strings we'll do it like this.
        $('<li class="block__video">' +
                '<a href="https://youtu.be/' + videoId + '" title="' + snippet.title + '" target="_blank">' +
                    '<div class="block__video__thumbnail" style="background-image:url(\'' + snippet.thumbnails.medium.url + '\')"></div>' +
                    '<div class="block__video__text">' +
                        '<h5>' + snippet.title + '</h5>' +
                        '<p><span class="block__video__date">' + date + '</span></p>' +
                    '</div>' +
                '</a>' +
            '</li>')
        .appendTo(listElement);
    };

    function timeSince(date)
    {
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " year ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + "h";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + "m";
        }
        return Math.floor(seconds) + "s";
    }

    return youtubeList;
}());

(function($) {

    $.fn.LazyLoad = function(options) {

        /**
         * Settings
         */
        var defaults = {
        };

        var settings = $.extend( true, {}, defaults, options );

        /**
         * Variables
         */
        var element = $(this),
            image = element.data('lazy-image'),
            dummyImage;

        /**
         * Init
         */
        dummyImage = new Image();
        dummyImage.className = 'lazy-images-dummy';
        dummyImage.src = image;

        $(dummyImage).on('load', function() {

            element.removeAttr('data-lazy-image');

            if (element.is('img')) {
                element.attr('src', image);
                return;
            }

            element.css('background-image', 'url("' + image + '")');
        });
    };

    /**
     * Find and start lazy loading
     */
    var images = $('[data-lazy-image]');
    $.each(images, function(i, val) {
        $(val).LazyLoad();
    });

}(jQuery));

(function($) {

    $.fn.NewsletterHandling = function(options) {

        /**
         * Settings
         */
        var defaults = {
        };

        var settings = $.extend( true, {}, defaults, options );

        /**
         * Variables
         */
        var element = $(this);

        /**
         * Functions
         */
        function submit()
        {
            event.preventDefault();

            var request = new XMLHttpRequest();
            request.open('POST', TML.Helpers.getDataUrl() + 'subscribe', true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.onerror = reportFail;

            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    var response = JSON.parse(request.responseText);

                    if (TML.Helpers.isset(response.success) && response.success == true) {
                        reportSuccess();
                        return;
                    }
                }

                reportFail( (typeof response !== 'undefined') ? response.error : null);
            };

            var email = element.find('input[name="email"]').val();
            var list = element.find('input[name="list"]').val();

            request.send("email="+email+"&list="+list);
        }

        function showMessage(text)
        {
            element.html('<p>' + text + '</p>');
        }

        function reportSuccess()
        {
            showMessage("Successfully subscribed!");
        }

        function reportError(error)
        {
            showMessage(error);
        }

        function reportFail(error)
        {
            if (TML.Helpers.isset(error)) {
                showMessage(error);
                return;
            }

            showMessage("Something went wrong. Try again later.");
        }

        /**
         * Init
         */
        element.on('submit', submit);
    };

    var forms = $('.newsletter-form');
    $.each(forms, function(i, val) {
        $(val).NewsletterHandling();
    });

}(jQuery));

"use strict";

if (typeof TML == 'undefined') var TML={};

TML.Helpers = (function () {

	var helpers = {};
	var dataUrl = 'https://www.tomorrowland.com/global/';

	helpers.isset = function(value)
	{
		return (typeof value !== 'undefined' && value !== null);
	};

	helpers.hasClass = function(element, className)
	{
		if (element.classList) {
			return element.classList.contains(className);
		}

		return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
	};

	helpers.addClass = function(element, className)
	{
		if (element.classList) {
			return element.classList.add(className);
		}

		element.className += ' ' + className;
	};

	helpers.removeClass = function(element, className)
	{
		if (element.classList) {
			return element.classList.remove(className);
		}

		element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	};

	helpers.toggleClass = function(element, className)
	{
		if (element.classList) {
			return element.classList.toggle(className);
		}

		var classes = element.className.split(' ');
		var existingIndex = classes.indexOf(className);

		if (existingIndex >= 0) {
			classes.splice(existingIndex, 1);
		}
		else {
			classes.push(className);
		}

		element.className = classes.join(' ');
	};

	helpers.redirectTo = function(url)
	{
			window.location.replace(url);
	};

	helpers.getDataUrl = function()
	{
			return dataUrl;
	};

	/*
	 * Load json from url in global variables. When it fails count the attempts
	 * and check again.
	 *
	 * We prevent cache every hour. A faster setting would bypass Varnish too
	 * much.
	 *
	 * Because we have to support jQuery 1.4, on error we do the fail callback
	 * as third argument (jQuery 1.4) and fail method (jQuery 1.5+).
	 *
	 * @param file string
	 * @param succesHandler function
	 * @param attempt integer optional
	 */
	helpers.getJson = function(uri, succesHandler, attempt)
	{
			var failCallback = function() {
					attempt = (typeof attempt !== 'undefined') ? attempt + 1 : 1;
					setTimeout(helpers.getJson, 2000 * attempt, uri, succesHandler, attempt);
			};

			var request = new XMLHttpRequest();
			request.open('GET', uri);

			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {
					succesHandler(JSON.parse(request.responseText));
				} else {
					failCallback();
				}
			};

			request.onerror = failCallback;

			request.send();
	};

	return helpers;
}());

"use strict";

if (typeof TML == 'undefined') var TML={};

TML.Topbar = (function () {

	var topbar = {};
	var navigationData = '';

	topbar.init = function()
	{
		initDropdowns();
	};

	function initDropdowns()
	{
		var dropdownToggleElements = document.getElementsByClassName('dropdown-toggle');

		for (var i=0; i<dropdownToggleElements.length; i++) {
			dropdownToggleElements[i].addEventListener('click', toggleTopbarDropdown);
			dropdownToggleElements[i].addEventListener('touchEnd', toggleTopbarDropdown);
		}
	}

	function toggleTopbarDropdown(event)
	{
		event.preventDefault();

		var parentElement = event.currentTarget.parentNode;

		if (TML.Helpers.hasClass(parentElement, 'open')) {
			TML.Topbar.closeDropdown();
			return;
		}

		TML.Topbar.openDropdown(parentElement);
	}

	topbar.openDropdown = function(parentElement)
	{
		parentElement.addEventListener('click', function(event) {
			event.stopPropagation();
		});

		document.addEventListener('click', TML.Topbar.closeDropdown);

		TML.Helpers.addClass(parentElement, 'open');
		TML.Helpers.addClass(document.body, "topbar-open");
	};

	topbar.closeDropdown = function()
	{
		var dropdownToggleElements = document.getElementsByClassName('dropdown-toggle');
		for (var i=0; i<dropdownToggleElements.length; i++) {
			TML.Helpers.removeClass(dropdownToggleElements[i].parentNode, 'open');
		}

		TML.Helpers.removeClass(document.body, "topbar-open");
	};

	return topbar;
}());

TML.Topbar.init();

"use strict";

if (typeof TML == 'undefined') var TML={};

TML.Footer = (function () {

	var footer = {};

	footer.init = function()
	{
		loadData();
	};

	function loadData()
	{
		TML.Helpers.getJson('https://www.tomorrowland.com/api/v1/?method=pages.getSitemap&format=json', function(response) {

			if (response === null) return;

			document.getElementById('footerNavigationStructure').innerHTML = parseJsonNavigationStructure(response.data);

			resetDropdowns();
			window.onresize = resetDropdowns;

		});
	}

	function parseJsonNavigationStructure(items)
	{
		var html = '';

		for (var i=0; i<items.length; i++) {
			if (TML.Helpers.isset(items[i].items) && items[i].items.length > 0) {
				html += parseDropdown(items[i]);
				continue;
			}

			html += parseLink(items[i]);
		}

		return html;
	}

	function parseDropdown(item)
	{
		var html = '<li>'+parseLink(item)+'<ul>';

		for (var i=0; i<item.items.length; i++) {
			html += parseSubLink(item.items[i]);
		}

		return html + '</ul></li>';
	}

	function parseSubLink(item)
	{
		if (!TML.Helpers.isset(item) || !TML.Helpers.isset(item.url) || !TML.Helpers.isset(item.label)) {
			return '';
		}

		return '<li><a href="'+item.url+'">'+item.label+'</a></li>';
	}

	function parseLink(item)
	{
		if (!TML.Helpers.isset(item) || !TML.Helpers.isset(item.url) || !TML.Helpers.isset(item.label)) {
			return '';
		}

		var isDropdown = (TML.Helpers.isset(item.items));

		var html = '<a href="'+item.url+'"' + (isDropdown ? ' class="footer-toggle" aria-haspopup="true" aria-expanded="false"' : '') + '>';
		if (TML.Helpers.isset(item.icon)) html += '<span class="footer-icon footer-icon--'+item.icon+'"></span>';
		html += '<span class="link-text">'+item.label+'</span>';
		if (isDropdown) html += '<span class="caret"></span>';

		return html + '</a>';
	}

	function resetDropdowns()
	{
		var dropdownToggleElements = document.getElementsByClassName('footer-toggle');
		for (var i=0; i<dropdownToggleElements.length; i++) {
			dropdownToggleElements[i].removeEventListener('click', toggleFooterDropdown);
		}

		if (window.innerWidth < 726) {

			for (var i=0; i<dropdownToggleElements.length; i++) {
				dropdownToggleElements[i].addEventListener('click', toggleFooterDropdown);
			}

			return;
		}
	}

	function toggleFooterDropdown(event)
	{
		event.stopPropagation();
		event.preventDefault();

		var parentElement = event.currentTarget.parentNode;
		var shouldCloseElement = false;

		if (TML.Helpers.hasClass(parentElement, 'open')) {
			shouldCloseElement = true;
		}

		var dropdownToggleElements = document.getElementsByClassName('footer-toggle');
		for (var i=0; i<dropdownToggleElements.length; i++) {
			TML.Helpers.removeClass(dropdownToggleElements[i].parentNode, 'open');
		}

		if (shouldCloseElement === true) {
			TML.Helpers.removeClass(parentElement, 'open');
			return;
		}

		TML.Helpers.addClass(parentElement, 'open');
	}

	return footer;
}());

"use strict";

if (typeof TML == 'undefined') var TML={};

TML.Splash = (function () {

    var splash = {};

    splash.init = function() {

        blocksSameHeight();
        konami();

        TML.Topbar.init();
        TML.Footer.init();
        TML.YoutubeList.init();
    };

    function blocksSameHeight()
    {
        $('#blocks .block__text-wrapper').matchHeight();
    }

    function konami()
    {
        // Konami code
        var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
        $(document).keydown(function(e) {
            kkeys.push(e.keyCode);

            if (kkeys.toString().indexOf( konami ) >= 0) {
                $(document).unbind('keydown',arguments.callee);
                $("body").prepend('<div class="pyro"><div class="before"></div><div class="after"></div></div>');

                ga('send', 'event', 'konami', 'activated', 'splash');
            }
        });
    }

    return splash;
}());

//# sourceMappingURL=scripts.js.map
