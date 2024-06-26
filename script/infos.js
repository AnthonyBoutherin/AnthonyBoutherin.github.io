document.addEventListener("DOMContentLoaded", function () {
  toggleInfos(".infos", ".card-content");
  for (let i = 2; i <= 9; i++) {
    toggleInfos(".infos-" + i, ".card-content-" + i);
  }
});

function toggleInfos(btnSelector, targetSelector) {
  var $infosBtn = document.querySelectorAll(btnSelector);

  if ($infosBtn.length > 0) {
    $infosBtn.forEach(function ($el) {
      $el.addEventListener("click", function () {
        var $target = document.querySelector(targetSelector);

        if ($target.hasAttribute("hidden")) {
          $target.removeAttribute("hidden");
        } else {
          $target.setAttribute("hidden", "");
        }
      });
    });
  }
}

