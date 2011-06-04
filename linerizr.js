(function($) {
$.fn.linerizr = function($o) {
	var _o = $.extend({
		fontSize: '.8em',
		cont: true,
		offset: 40,
		width: 25,
		fg: '#444444',
		bg: '#aaaaaa'
	},$o);

	return this.each(function() {
		$(this).css({
			position: 'relative',
			paddingLeft: _o.offset
		});

		if (!$.fn.linerizr.start) {
			$.fn.linerizr.start = 0;
		}

		var _nlines = Math.floor(
				($(this).innerHeight() -
				parseInt($(this).css('paddingBottom').replace(/px$/, ''), 10) -
				parseInt($(this).css('paddingTop').replace(/px$/, ''), 10)) /
				parseInt($(this).css('lineHeight').replace(/px$/, ''), 10)
				),
			_i,
			_text = '',
			_liner = $('<pre><\/pre>')
				.css({
					margin: 0,
					padding: '0 5px',
					textAlign: 'right',
					paddingTop: $(this).css('paddingTop'),
					paddingBottom: $(this).css('paddingBottom'),
					lineHeight: $(this).css('lineHeight'),
					display: 'block',
					position: 'absolute',
					width: _o.width,
					backgroundColor: _o.bg,
					color: _o.fg,
					fontSize: _o.fontSize,
					overflow: 'hidden',
					top: 0,
					left: 0
				})
				.appendTo(this);

		for (_i = 1; _i <= _nlines; _i++) {
			var _s = (_i + $.fn.linerizr.start).toString();
			_text = _text +
				(_s.length === 2 ? '0' :
				_s.length === 1 ? '00' : '') +
				_s +
				'\n';
		}

		_liner.text(_text);

		if (_o.cont) {
			$.fn.linerizr.start += _nlines;
		}

		return true;
	});
};
})(jQuery);
