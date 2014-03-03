/* wtfpl */
var hook = {
	on: function(evnt, elem, func) {
		if(typeof elem == 'string')
			elem = document.getElementById(elem);
		if(elem == null)
			return;
		if (elem.addEventListener) {
			if(evnt == 'mousewheel')
				elem.addEventListener('DOMMouseScroll',func,false);
			elem.addEventListener(evnt,func,false);
		} else if (elem.attachEvent) {
			return elem.attachEvent('on'+evnt, func);
		}
		else window.alert('something failed when you did that. good job!');
	},
	off: function(evnt, elem, func) {
		if(typeof elem == 'string')
			elem = document.getElementById(elem);
		if(elem == null)
			return;
		if (elem.removeEventListener) {
			if(evnt == 'mousewheel')
				elem.removeEventListener('DOMMouseScroll',func,false);
			elem.removeEventListener(evnt,func,false);
		} else if (elem.detachEvent) {
			return elem.detachEvent('on'+evnt, func);
		}
		else window.alert('something failed when you did that. good job!');
	},
	fire: function(evnt, elem) {
		if(typeof elem == 'string')
			elem = document.getElementById(elem);
		if(elem == null)
			return;
		var evt = document.createEvent('MouseEvents');
		evt.initEvent(evnt, true, true);
		if (document.createEvent) {
			elem.dispatchEvent(evt);
		} else {
			elem.fireEvent(evt.eventType, evt);
		}
	}
}
