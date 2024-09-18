//Width and Height
var w =1000;
var h = 300;

var padding = 60;

var dataset = [
    [2, 9],
    [3, 5],
    [5, 17],
    [6, 6],
    [6, 12],
    [7, 20],
    [8, 22],
    [10, 11],
    [5, 12],
    [6, 16],
  ];

var margin = {top: 20, right: 20, bottom: 40, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var scale = d3.scaleLinear()
        .domain([d3.min(dataset,function(d){
            return d[0]
        }),
        d3.max(dataset,function(d){
            return d[0];
        })])
        .range([0,w]);

var yScale = d3.scaleLinear()
        .domain([0,d3.max(dataset, function(d){return d[1];})])
        .range([h-padding,padding])

var xScale = d3.scaleLinear()
        .domain([d3.min(dataset, function(d){
            return d[0];
        }),
    d3.max(dataset,function(d){
        return d[0];
    })])
    .range([padding,w-padding*2])

var xAxis = d3.axisBottom()
    .ticks(5)
    .scale(xScale);

var yAxis = d3.axisLeft()
    .ticks(5)
    .scale(yScale);

var svg = d3
.select("body")
.append("svg")
.attr("width",w)
.attr("height",h)
.attr("fill","#4f42b5");

svg
.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx",function(d,i){
    return xScale(d[0]);
})
.attr("cy",function(d){
    return yScale(d[1]);
})
.attr("r",function(d){
    return 5;
})
.attr("fill","slategrey");

svg
.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d){
    return d[0] + ","+d[1];
})
.attr("x",function(d,i){
    return xScale(d[0]);
})
.attr("y",function(d){
    return yScale(d[1]);
});

svg
.append("g")
.attr("transform","translate(0,"+(h-padding)+")")
.call(xAxis);

svg
.append("g")
.attr("transform","translate("+padding+",0)")
.call(yAxis);

//X axis label
svg.append("text")
    .attr("text-anchor", "middle")
    .attr("x", w-180)
    .attr("y", h-20)
    .text("Tree Age (year)")


// Y axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", 20)
    .attr("x", -margin.top)
    .text("Tree Height (m)")
    .style(fill,"black");
