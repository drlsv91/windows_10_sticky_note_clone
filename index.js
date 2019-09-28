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

function createOptions(wrapper) {
  var _options = document.createElement("div");
  _options.className = "options";
  var _colors = document.createElement("div");
  _colors.className = "colors";
  var _yellow = document.createElement("div");
  _yellow.className = "yellow";
  var _green = document.createElement("div");
  _green.className = "green";
  var _pink = document.createElement("div");
  _pink.className = "pink";
  var _purple = document.createElement("div");
  _purple.className = "purple";
  var _cyan = document.createElement("div");
  _cyan.className = "cyan";
  var _gray = document.createElement("div");
  _gray.className = "gray";
  var _black = document.createElement("div");
  _black.className = "black";
  var _more = document.createElement("more");

  _more.className = "more";
  _more.style.display = "flex";
  _more.style.flexDirection = "column";
  //================================================
  var _note_list = document.createElement("div");
  _note_list.className = "note-list-icon";
  var _span_icon = document.createElement("span");
  var _span_list = document.createElement("span");
  var _list_icon = document.createElement("i");
  _list_icon.className = "fa fa-align-left";
  _span_list.textContent = "Note list";
  _span_list.className = "note-label";
  _span_icon.appendChild(_list_icon);
  _note_list.appendChild(_span_icon);
  _note_list.appendChild(_span_list);
  // close
  var _close = document.createElement("div");
  _close.className = "close";
  _close.style.cssFloat = "left";
  var _close_icon = document.createElement("i");
  //close options button
  _close.onclick = function() {
    _options.classList.remove("open");
  };
  _close_icon.className = "fa fa-times";
  _close.appendChild(_close_icon);
  //==================================================
  var _delete_note = document.createElement("div");
  _delete_note.className = "delete-note";
  var _span_delete_icon = document.createElement("span");
  var _span_delete = document.createElement("span");
  _span_delete.textContent = "Delete Notes";
  _span_delete.className = "delete-label";

  var _trash_icon = document.createElement("i");
  _trash_icon.className = "fa fa-trash-o";

  _delete_note.appendChild(_span_delete_icon);
  _span_delete_icon.appendChild(_trash_icon);
  _delete_note.appendChild(_span_delete);

  //================================
  _more.appendChild(_note_list);
  _more.appendChild(_delete_note);
  _more.appendChild(_close);
  //================================
  _colors.appendChild(_yellow);
  _colors.appendChild(_green);
  _colors.appendChild(_pink);
  _colors.appendChild(_purple);
  _colors.appendChild(_cyan);
  _colors.appendChild(_gray);
  _colors.appendChild(_black);
  _options.appendChild(_colors);
  _options.appendChild(_more);
  wrapper.appendChild(_options);
}

function buildNoteElement(wrapper) {
  var _container = document.createElement("div");
  var _header = document.createElement("div");
  var _plus = document.createElement("div");
  _plus.className = "plus";
  var _dots = document.createElement("div");
  _dots.className = "dots";
  var _times = document.createElement("div");
  _times.className = "times";
  var _ellipsis_icon = document.createElement("i");
  var _times_icon = document.createElement("i");
  var _plus_icon = document.createElement("i");
  _plus_icon.className = "fa fa-plus";
  _plus_icon.onclick = function() {
    createNewNote();
  };
  _ellipsis_icon.className = "fa fa-ellipsis-h";
  //open options button
  _ellipsis_icon.onclick = function() {
    wrapper.children[0].classList.add("open");
  };
  _times_icon.className = "fa fa-times";
  _container.className = "container";
  _header.className = "header";
  _plus.appendChild(_plus_icon);
  _dots.appendChild(_ellipsis_icon);
  _times.appendChild(_times_icon);
  _header.appendChild(_plus);
  _header.appendChild(_dots);
  _header.appendChild(_times);
  _container.appendChild(_header);

  var _note = document.createElement("div");
  _note.className = "note";
  var _textarea = document.createElement("textarea");
  _textarea.placeholder = "Take a note";
  _textarea.cols = "50";
  _textarea.rows = "10";

  _note.appendChild(_textarea);
  _container.appendChild(_note);

  footerElement(_container);
  wrapper.appendChild(_container);
}
//open options
function footerElement(container) {
  var _footer = document.createElement("div");
  _footer.className = "footer";
  var _span_bold = document.createElement("span");
  var _span_itallic = document.createElement("span");
  var _span_underline = document.createElement("span");
  var _span_line_through = document.createElement("span");
  var _span_list = document.createElement("span");
  var _span_image = document.createElement("span");

  var _bold_icon = document.createElement("i");
  var _itallic_icon = document.createElement("i");
  var _list_icon = document.createElement("i");
  var _image_icon = document.createElement("i");
  var _underline_icon = document.createElement("i");

  _bold_icon.className = "fa fa-bold";
  _span_bold.className = "bold";
  _itallic_icon.className = "fa fa-italic";
  _span_itallic.className = "italic";
  _span_underline.className = "underline";
  _span_line_through.className = "line-through";
  _span_line_through.textContent = "abc";
  _list_icon.className = "fa fa-list";
  _span_list.className = "list";
  _image_icon.className = "fa fa-image";
  _span_image.className = "image";
  _underline_icon.className = "fa fa-underline";
  _span_underline.className = "underline";

  _span_bold.appendChild(_bold_icon);
  _span_itallic.appendChild(_itallic_icon);
  _span_list.appendChild(_list_icon);
  _span_image.appendChild(_image_icon);
  _span_underline.appendChild(_underline_icon);
  _footer.appendChild(_span_bold);
  _footer.appendChild(_span_itallic);
  _footer.appendChild(_span_underline);
  _footer.appendChild(_span_line_through);
  _footer.appendChild(_span_list);
  _footer.appendChild(_span_image);
  container.appendChild(_footer);
}
function createNewNote() {
  var newWrapper = document.createElement("div");
  createOptions(newWrapper);
  styleDivWrapper(newWrapper);
  buildNoteElement(newWrapper);
  // newWrapper.innerHTML = html;
  document.body.appendChild(newWrapper);
  customeDrag(newWrapper);
}

function customeDrag(wrapper) {
  var active = false;
  var currentX, currentY, initialX, initialY;
  var xOffset = 0;
  var yOffset = 0;
  function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    //wrapper
    if (wrapper.children[1]) {
      // console.log(wrapper.children[1]);
      active = true;
    }

    // console.log(e.target);
    // console.log(wrapper.children[1].parentNode.firstChild);
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    active = false;
  }
  function drag(e) {
    if (active) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      xOffset = currentX;
      yOffset = currentY;
      setTranslate(currentX, currentY, wrapper.children[1]);
    }
  }
  function setTranslate(xPos, yPos, el) {
    if (el.parentNode.firstChild.className == "options") {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      // console.log(el.parentNode);
      el.parentNode.firstChild.style.transform =
        "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    } else if ((el.parentNode.children[0].className = "options")) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      el.parentNode.children[0].style.transform =
        "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
  }
  wrapper.addEventListener("mousedown", dragStart, false);
  wrapper.addEventListener("mouseup", dragEnd, false);
  wrapper.addEventListener("mousemove", drag, false);
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
customeDrag(document.querySelector(".wrapper"));
