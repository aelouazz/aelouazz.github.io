// Make the DIV element draggable:
dragElement(document.getElementById("draggable"));

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		// if present, the header is where you move the DIV from:
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		// otherwise, move the DIV from anywhere inside the DIV:
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}










// the following code is to make the page drawable

// // create canvas element and append it to document body
// var canvas = document.createElement('canvas');
// document.getElementById("drawhere").appendChild(canvas);

// // some hotfixes... ( ≖_≖)
// document.body.style.margin = 0;
// canvas.style.position = 'fixed';

// // get canvas 2D context and set him correct size
// var ctx = canvas.getContext('2d');
// resize();

// // last known position
// var pos = { x: 0, y: 0 };

// window.addEventListener('resize', resize);
// document.addEventListener('mousemove', draw);
// document.addEventListener('mousedown', setPosition);
// document.addEventListener('mouseenter', setPosition);

// // new position from mouse event
// function setPosition(e) {
//   pos.x = e.clientX;
//   pos.y = e.clientY;
// }

// // resize canvas
// function resize() {
//   ctx.canvas.width = window.innerWidth;
//   ctx.canvas.height = window.innerHeight;
// }

// function draw(e) {
//   // mouse left button must be pressed
//   if (e.buttons !== 1) return;

//   ctx.beginPath(); // begin

//   ctx.lineWidth = 5;
//   ctx.lineCap = 'round';
//   ctx.strokeStyle = "#03A1C3";

//   ctx.moveTo(pos.x, pos.y); // from
//   setPosition(e);
//   ctx.lineTo(pos.x, pos.y); // to

//   ctx.stroke(); // draw it!
// }
