/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/sections/section-model',
    'models/sections/section-twitter-model',
    'collections/section-collection',
    'views/section-collection-view',
], function ($, _, Backbone, JST, SectionModel, SectionTwitterModel, SectionCollection, SectionCollectionView) {
    'use strict';

    var ScreenView = Backbone.View.extend({

    	el: $('#screen'),

    	initialize: function initializeFn () {

    		this.log("Initialising screen");
    	},

        render: function renderFn () {

        	var sectionTwitter = new SectionTwitterModel({ type: "twitter", title: "@ThisIsZone" }),
        		sectionTeam = new SectionModel({ type: "team", title: "Team" }),
        		sectionPoll = new SectionModel({ type: "poll", title: "Poll" }),
        		sectionCountdown = new SectionModel({ type: "countdown", title: "Countdown" }),
                sectionNews = new SectionModel({ type: "news", title: "Most popular today" }),
                sectionTicker = new SectionModel({ type: "ticker", title: "Ticker" });
        	
        	var sectionCollection = SectionCollection.getInstance();

        	sectionCollection.add(sectionTwitter);
        	sectionCollection.add(sectionTeam);
        	sectionCollection.add(sectionPoll);
        	sectionCollection.add(sectionCountdown);
            sectionCollection.add(sectionNews);
            sectionCollection.add(sectionTicker);

        	var sectionCollectionView = new SectionCollectionView({ collection: sectionCollection });

        	this.$el.html( sectionCollectionView.render().el );

            sectionCollection.trigger("renderingComplete");

        	return this;
        }

    });

    return ScreenView;
});