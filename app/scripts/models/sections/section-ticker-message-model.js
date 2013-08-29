/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var SectionTickerMessageModel = Backbone.Model.extend({
        
        defaults:{
        	imgSrc: "http://placekitten.com/60/60",
        	text: "Nothing to see here"
        }
        
    });

    return SectionTickerMessageModel;
});