(function () {
  "use strict";

  function previousHeading(element) {
    var candidate = element.previousElementSibling;

    while (candidate) {
      if (/^H[1-6]$/.test(candidate.tagName)) return candidate.textContent.trim();
      candidate = candidate.previousElementSibling;
    }

    return "Data";
  }

  document.querySelectorAll("main table").forEach(function (table, index) {
    if (table.parentElement.classList.contains("table-scroll")) return;

    var wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    wrapper.tabIndex = 0;
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute("aria-label", previousHeading(table) + " table");
    wrapper.setAttribute("aria-describedby", "table-scroll-help-" + index);

    var help = document.createElement("span");
    help.id = "table-scroll-help-" + index;
    help.hidden = true;
    help.textContent = "Scroll horizontally to see all table columns when needed.";

    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    wrapper.appendChild(help);
  });

  var animatedImages = Array.prototype.filter.call(
    document.querySelectorAll("main img[src]"),
    function (image) {
      var src = image.getAttribute("src").toLowerCase();
      return src.endsWith(".gif") && !src.endsWith("/eds.gif") && !src.endsWith("/liveeds.gif");
    }
  );

  if (!animatedImages.length) return;

  var items = animatedImages.map(function (image) {
    var media = image.parentElement.tagName === "A" ? image.parentElement : image;
    var canvas = document.createElement("canvas");
    image.setAttribute("data-animation-source", "true");
    canvas.className = "paused-animation";
    canvas.hidden = true;
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", image.getAttribute("alt") || "Paused instructional animation");
    media.insertAdjacentElement("afterend", canvas);
    return { image: image, media: media, canvas: canvas };
  });

  var button = document.createElement("button");
  button.type = "button";
  button.className = "animation-toggle";
  button.textContent = "Pause animations";
  button.setAttribute("aria-pressed", "false");

  var main = document.querySelector("main");
  var firstHeading = main.querySelector("h1");
  if (firstHeading) firstHeading.insertAdjacentElement("afterend", button);
  else main.insertAdjacentElement("afterbegin", button);

  function showPausedFrame(item) {
    if (!item.image.complete || !item.image.naturalWidth) return false;

    var bounds = item.image.getBoundingClientRect();
    var context = item.canvas.getContext("2d");
    if (!context) return false;

    item.canvas.width = item.image.naturalWidth;
    item.canvas.height = item.image.naturalHeight;
    item.canvas.style.width = bounds.width + "px";
    item.canvas.style.height = bounds.height + "px";

    try {
      context.drawImage(item.image, 0, 0);
    } catch (error) {
      return false;
    }

    item.media.hidden = true;
    item.canvas.hidden = false;
    return true;
  }

  function pauseItem(item) {
    if (showPausedFrame(item)) return;

    item.image.addEventListener(
      "load",
      function () {
        if (button.getAttribute("aria-pressed") === "true") showPausedFrame(item);
      },
      { once: true }
    );
  }

  function resumeItem(item) {
    item.canvas.hidden = true;
    item.media.hidden = false;
    item.canvas.style.width = "";
    item.canvas.style.height = "";

    var src = item.image.src;
    item.image.src = "";
    item.image.src = src;
  }

  button.addEventListener("click", function () {
    var paused = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", paused ? "false" : "true");
    button.textContent = paused ? "Pause animations" : "Resume animations";

    items.forEach(paused ? resumeItem : pauseItem);
  });
})();
