
$(document).ready(function() {
  $(".btn").on("click", addItem);
  $(".link-delete").on("click", deleteItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

function addItem() {
  // console.log("Test!")
  text = window.prompt("New Bucket Item");
  delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  //
  numItems = $("li").length;
  $(".total").html(numItems + " items");
}

function deleteItem(event) {
  console.info(event);
  $(event.target).parent().remove();
}
