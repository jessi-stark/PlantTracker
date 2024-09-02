function doGet(e) {

  return HtmlService.createHtmlOutputFromFile("home.html");

}

function getAllPagesContent(){
  
  //compile pages
  var plants_page = HtmlService.createHtmlOutputFromFile("plants.html");
  //plants_page.getElementById("plants_display_area").innerHTML = HtmlService.createHtmlOutputFromFile("plant_list_card.html");

  var watering_page = HtmlService.createHtmlOutputFromFile("watering.html");
  var maintenance_page = HtmlService.createHtmlOutputFromFile("maintenance.html");
  var pests_page = HtmlService.createHtmlOutputFromFile("pests.html");

  return "<div id='pages_container'>" + plants_page.getContent() + watering_page.getContent() + maintenance_page.getContent() + pests_page.getContent() + "</div>";
}


function getPageContent(pageName) {
  var html = HtmlService.createTemplateFromFile(pageName + ".html").evaluate().getContent();
  console.log(html);
  return html;
}

function getPlantListCards() {

  var html = HtmlService.createTemplateFromFile("plant_list_card.html").evaluate().getContent();
  console.log(html);
  return html;

}