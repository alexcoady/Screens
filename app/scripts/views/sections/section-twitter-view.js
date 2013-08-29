/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/sections/section-view',
    'models/sections/twitter-user-model',
    'd3',

], function ($, _, Backbone, JST, SectionView, TwitterUserModel, d3) {
    'use strict';

    var SectionTwitterView = SectionView.extend({

        animationDuration: 2000,
        
        template: JST['app/scripts/templates/sections/section-twitter.ejs'],

        initialize: function initializeFn () {

            SectionView.prototype.initialize.apply(this, arguments);
        },

        /*
        *   @title render
        *   ------------------------------------------------
        *   Renders the view
        *   ------------------------------------------------
        *   @param null
        *   @return (Backbone.Model) that/this
        */
        render: function renderFn () {

            // Stops render if model isn't ready yet
            // Will be rendered on model change anyway
            if ( this.model.get("statuses_count") === undefined ) return this;

            var that = SectionView.prototype.render.apply(this, arguments);

            that.drawCharts();

            return that;
        },

        /*
            Triggers all chart drawing
        */
        drawCharts: function drawChartsFn () {

            this.drawWeekChart();
            this.drawMonthChart();
        },

        /*
            Draws weekly line chart
        */
        drawWeekChart: function drawWeekChartFn () {

            var dataset = [
                [ 0, 5 ],
                [ 1, 5 ],
                [ 2, 2 ],
                [ 3, 11 ],
                [ 4, 7 ],
                [ 5, 9 ],
                [ 6, 2 ]
            ];

            var days = ["M", "T", "W", "T", "F", "S", "S"];

            var padding = {
                top: 10,
                right: 40,
                bottom: 25,
                left: 40
            };

            var width = this.$('.chart--twitter-week').width(),
                height = this.$('.chart--twitter-week').height();

            var xScale = d3.scale.linear() 
                        .domain([0, 6])
                        .range([padding.left, width - padding.right]);

            var yScale = d3.scale.linear() 
                        .domain([0, 12])
                        .range([height - (padding.bottom + 10), padding.top]);

            var xAxis = d3.svg.axis()
                        .scale(xScale)
                        .orient("bottom")
                        .ticks(7)
                        .tickFormat(function (d) {

                            return days[d];
                        });

            var yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left")
                        .tickValues([5, 10, 15, 20, 25]);

            var stage = d3.select( '.chart--twitter-week' )
                        .append('svg')
                        .attr({
                            "width": width,
                            "height": height
                        })
                        .classed("stage stage--twitter-week", true);

            var line = d3.svg.line()
                        .x(function (d) { return xScale(d[0]); })
                        .y(function (d) { return yScale(d[1]); });

            var flatLine = d3.svg.line()
                        .x(function (d) { return xScale(d[0]) })
                        .y(function (d) { return (height - padding.bottom) / 2 });

            stage.selectAll("line.grid-line")
                      .data(yScale.ticks(5))
                      .enter().append("line")
                      .attr("class", "grid-line")
                      .attr("x1", padding.left - 10)
                      .attr("x2", width )
                      .attr("y1", yScale)
                      .attr("y2", yScale);


            stage.selectAll('path.chart-path')
                        .data([dataset])
                        .enter()
                        .append('path')
                        .attr({
                            'class': 'chart-path',
                            d: function (d) {
                                return flatLine(d);
                            }
                        });

            stage.selectAll('path.chart-path')
                        .data([dataset])
                        .transition()
                        .duration( this.animationDuration )
                        .delay(1000)
                        .attr({
                            'class': 'chart-path pulse-width',
                            d: function (d) {
                                return line(d);
                            }
                        });

            stage.append("g")
                        .attr({
                            "class": "axis axis--week-days",
                            "transform": "translate(0, " + (height - padding.bottom) + ")"
                        })
                        .call(xAxis);

            stage.append("g")
                        .attr({
                            "class": "axis axis--tweet-count",
                            "transform": "translate(" + 30 + ", 0)"
                        })
                        .call(yAxis);
        },

        /*
            Draws monthly bar chart
        */
        drawMonthChart: function drawMonthChartFn () {

            var dataset = [
                [ 0, 34 ],
                [ 1, 65 ],
                [ 2, 23 ],
                [ 3, 12 ],
                [ 4, 23 ],
                [ 5, 56 ],
                [ 6, 53 ],
                [ 7, 43 ],
                [ 8, 54 ],
                [ 9, 78 ],
                [ 10, 34 ],
                [ 11, 100 ],
            ];

            var months = [
                "J", 
                "F", 
                "M", 
                "A", 
                "M", 
                "J", 
                "J", 
                "A", 
                "S", 
                "O", 
                "N", 
                "D"
            ];

            var padding = {
                top: 0,
                right: 0,
                bottom: 26,
                left: 0,
                bar: 12
            };

            var width = this.$('.chart--twitter-month').width(),
                height = this.$('.chart--twitter-month').height();

            var xScale = d3.scale.linear() 
                        .domain([0, 11])
                        .range([padding.left, width - padding.right]);

            var yScale = d3.scale.linear() 
                        .domain([0, 100])
                        .range([height - padding.bottom, padding.top]);

            var xAxis = d3.svg.axis()
                        .scale(xScale)
                        .orient("bottom")
                        .ticks(12)
                        .tickFormat(function (d) {

                            return months[d];
                        });

            var stage = d3.select( '.chart--twitter-month' )
                        .append('svg')
                        .attr({
                            "width": width,
                            "height": height
                        })
                        .classed("stage stage--twitter-month", true);

            stage.selectAll("rect.bar-background")
                       .data(dataset)
                       .enter()
                       .append("rect")
                       .attr("x", function (d, i) {

                            return i * ((width + padding.bar) / dataset.length);
                       })
                       .attr("y", function (d, i) {

                            return padding.top;
                       })
                       .attr("width", width / dataset.length - padding.bar)
                       .attr("height", function (d, i) {

                            return height - padding.bottom;
                       })
                       .attr("class", "bar-background");

            stage.selectAll("rect.bar-content")
                       .data(dataset)
                       .enter()
                       .append("rect")
                       .attr("x", function (d, i) {

                            return i * ((width + padding.bar) / dataset.length);
                       })
                       .attr("y", function (d, i) {

                            return height - padding.bottom;
                       })
                       .attr("width", width / dataset.length - padding.bar)
                       .attr("height", function (d, i) {

                            return 0;
                       })
                       .attr("class", "bar-content");

            stage.selectAll("rect.bar-content")
                       .data(dataset)
                       .transition()
                       .duration(300)
                       .delay(function(d, i) {

                            return i * 100;
                       })
                       .attr({
                            "y": function (d, i) {

                                return yScale(d[1]);
                            },
                            "height": function (d, i) {

                                return yScale((height + padding.bottom / 2) - d[1])
                            }
                        })
                       .each("end", function (d) {
                            d3.select(this).classed("pulse-color", true);
                       });

            stage.selectAll("text")
                        .data(dataset)
                        .enter()
                        .append("text")
                        .text(function (d) {
                            return months[d[0]];
                        })
                        .attr("x", function(d, i) {
                            return i * ((width + padding.bar) / dataset.length) + 5;
                        })
                        .attr("y", function(d) {
                            return height;
                        });
        },

    });

    return SectionTwitterView;
});