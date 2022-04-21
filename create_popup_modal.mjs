//Query the parent container that will eject pop-up modal into html.
const parentContainer = document.querySelector('body');

//Create comment popup modal variable
let popupModal = `<div id="commentModal">
  <div id="imageContainer">
        <img src="" alt="">
		<p id="food-name"></p>
  </div>

  <div id="form">
    <input type="text" placeholder="Enter your name id="user-name">
	<textarea id="comment" placeholder="Write your comment..."></textarea>
	<button type="submit" id="submit-btn">Submit </button>
</div>`


