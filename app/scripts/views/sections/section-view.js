/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/section-collection',
], function ($, _, Backbone, JST, SectionCollection) {
    'use strict';

    var SectionView = Backbone.View.extend({
        
        template: JST['app/scripts/templates/sections/section.ejs'],

        tagName: "section",

        className: "section",

        initialize: function initializeFn () {

            this.$el.addClass( "section--" + this.model.get("type") );
            this.model.on("change", this.render, this);

            this.listenTo(SectionCollection.getInstance(), "renderingComplete", this.getGoing);
        },

        render: function renderFn () {

        	var template = this.template( this.model.toJSON() );            
        	this.$el.html(template);

        	return this;
        },

        getGoing: function getGoingFn () {
            
        }
    });

    return SectionView;
});