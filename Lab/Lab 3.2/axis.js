var w =500;
var h = 150;

var padding = 20;

var dataset =  [       [5, 20, 12],
[400, 90, 22],
[250, 20, 23],
[300, 50, 12],
[100, 95, 16],
[410, 12, 12],
[406, 44, 10],
];


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
    return d[2];
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