var headerIcons = document.querySelector(".header");
var options = document.querySelector(".options");
//head function part
function headFunction(e) {
  var target = e.target;
  if (target.className === "fa fa-ellipsis-h") {
    options.classList.add("open");
    // console.log(e.pageX);
  }
  if (target.className === "fa fa-plus") {
    createNewNote();
  }
}
document.querySelector(".close").addEventListener("click", function() {
  options.classList.remove("open");
});

headerIcons.addEventListener("click", headFunction);

// Add sticky note
function createNewNote() {
  var newWrapper = document.createElement("div");
  styleDivWrapper(newWrapper);
  //   console.log(generateLeftPosition());
  var html = `
  <div class="container">
  <div class="header">
       <div class="plus"><i class="fa fa-plus"></i></div>
       <div class="dots"><i class="fa fa-ellipsis-h"></i></div>
       <div class="times"><i class="fa fa-times"></i></div>
  </div>

  <div class="note">
      <textarea cols="50" rows="10" placeholder="Take a note..."></textarea>
  </div>
  <div class="footer">
      <span class="bold"><i class="fa fa-bold"></i></span>
      <span class="itallic"><i class="fa fa-italic"></i></span>
      <span class="underline"><i class="fa fa-underline"></i></span>
      <span class="line-through">abc</span>
      <span class="list"><i class="fa fa-list"></i></span>
      <span class="list"><i class="fa fa-image"></i></span>
  </div>
</div>
      `;
  newWrapper.innerHTML = html;
  document.body.appendChild(newWrapper);
}

function generateLeftPosition() {
  var value = Math.floor(Math.random() * 600) + 400 + "px";
  return value;
}
function generateTopPosition() {
  var value = Math.floor(Math.random() * 100) + 10 + "px";
  return value;
}

function styleDivWrapper(wrapper) {
  wrapper.className = "new-wrapper";
  wrapper.style.position = "absolute";
  wrapper.style.left = generateLeftPosition();
  wrapper.style.top = generateTopPosition();
}

// make draggable
var newWrapper = document.querySelector(".new-wrapper");
window.onload = addListeners;

function addListeners() {
  document
    .querySelector(".container")
    .addEventListener("mousedown", mouseDown, false);
  window.addEventListener("mouseup", mouseUp, false);
}

function mouseUp() {
  window.removeEventListener("mousemove", dragNote, true);
}

function mouseDown(e) {
  window.addEventListener("mousemove", dragNote, true);
}

// var container = document.querySelector(".container");
// let isMoving = false;
// let lastX = 0;
// let lastY = 0;
function dragNote(e) {
  //   if (!isMoving) return;
  var div = document.querySelector(".container");
  div.style.position = "absolute";
  div.style.top = e.clientY + "px";
  div.style.left = e.clientX + "px";
}
// container.addEventListener("mousemove", dragNote);
// container.addEventListener("mousedown", () => (isMoving = true));
// container.addEventListener("mouseup", () => (isMoving = false));
// container.addEventListener("mouseout", () => (isMoving = false));
