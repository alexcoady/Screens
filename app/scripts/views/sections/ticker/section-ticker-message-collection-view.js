/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/sections/ticker/section-ticker-message-view',
], function ($, _, Backbone, JST, TickerMessageView) {
    'use strict';

    var SectionTickerMessageCollectionView = Backbone.View.extend({
        
    	tagName: 'ul',

        className: "ticker__list",

    	initialize: function initializeFn () {

            this.collection.on("change", this.render, this);
    		this.collection.on("add", this.renderOne, this);
    	},

    	render: function renderFn () {

    		var that = this;

    		this.collection.each(function (message) {

    			that.renderOne(message);
    		});

    		return this;
    	},

    	renderOne: function renderOneFn ( message ) {

    		var view = new TickerMessageView({ model: message });
    		this.$el.append( view.render().el );
    		return this;
    	}

    });

    return SectionTickerMessageCollectionView;
});