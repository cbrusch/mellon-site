$(function() {
	console.log("the document is ready");

	//create a controller
	var controller = new ScrollMagic.Controller();

	//create a Tween with GSAP
	var myTween = new TweenMax.to('.books', 3, {
		//define css animations
		// -webkit-animation: draw 5s 1s 3;
		// animation: draw 5s 1s 3;
		backgroundColor: 'blue'
	});

	var containerScene = new ScrollMagic.Scene ({
		triggerElement: '#Layer_1'
	})
		console.log("I made a new scene")
		.setTween(myTween)
		.addTo(controller);
		console.log("I added the scene to the controller");
});






// // create a scene
// new ScrollMagic.Scene({
// 		duration: 100,	// the scene should last for a scroll distance of 100px
// 		offset: 50		// start this scene after scrolling for 50px
// 	})
// 	.setPin("#my-sticky-element") // pins the element for the the scene's duration
// 	.addTo(controller); // assign the scene to the controller








// new ScrollMagic.Scene( {
// 	duration: 300,	//the scene last for a scroll of 100px
// 	offset: 50		//the scene starts after scrolling for 50px
// })
// .setPin(".books") 	//the element that will be animated

// //add scene to the controller
// controller.addScene(scene);

// });
