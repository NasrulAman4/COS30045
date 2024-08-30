function init() {
    d3.csv("wombats1.csv").then(function (data) {
      console.log(data);
      wombatSighting = data;
  
      barChart(wombatSighting);
    });
  
    var w = 500;
    var h = 150;
  
    var padding = 3;
  
    var svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("fill", function (d) {
        if (d > 10) {
          return "black";
        }
        return "red";
      });
  
    function barChart(dataset) {
      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
          return i * (w / dataset.length);
        })
        .attr("y", function (d) {
          return h - d.wombats * 4;
        })
        .attr("width", function (d) {
          return w / dataset.length - padding;
        })
        .attr("height", function (d) {
          return d.wombats * 4;
        })
        
        .attr("fill",function(d){
          return "rgb(135, 206," + (d.wombats * 8) + ")";
        });

        svg
        .selectAll("text")
        .data(wombatSighting)
        .enter()
        .append("text")
        .text(function(d){
          return d.wombats;
        })
        .attr("fill","black")
        .attr("x",function(d,i){
          return i * (w/wombatSighting.length)+10.15;
        })
        .attr("y",function(d){
          return h -(d.wombats*4.5);
        })
    }
  }
  
  window.onload = init;