/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var SectionModel = Backbone.Model.extend({
        
        defaults:{
        	title: "Section title",
        	top: 0,
        	left: 0,
        	width: 0,
        	height: 0
        },

        initialize: function initializeFn () {


        }
    });

    return SectionModel;
});