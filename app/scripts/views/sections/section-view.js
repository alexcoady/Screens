/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var SectionView = Backbone.View.extend({
        
        template: JST['app/scripts/templates/sections/section.ejs'],

        tagName: "section",

        className: "section",

        initialize: function initializeFn () {

        },

        render: function renderFn () {

        	this.$el.addClass( this.model.get("cssClass") );

        	var template = this.template( this.model.toJSON() );
            
        	this.$el.html(template);
        	return this;
        }
    });

    return SectionView;
});