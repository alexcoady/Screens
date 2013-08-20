/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/section-model',
    'models/section-twitter-model',
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
        		sectionDates = new SectionModel({ type: "dates", title: "Dates" }),
        		sectionTeam = new SectionModel({ type: "team", title: "Team" }),
        		sectionPoll = new SectionModel({ type: "poll", title: "Poll" }),
        		sectionCountdown = new SectionModel({ type: "countdown", title: "Countdown" }),
                sectionNews = new SectionModel({ type: "news", title: "News" }),
                sectionTicker = new SectionModel({ type: "ticker", title: "Ticker" });
        	
        	var sectionCollection = new SectionCollection();

        	sectionCollection.add(sectionTwitter);
        	sectionCollection.add(sectionDates);
        	sectionCollection.add(sectionTeam);
        	sectionCollection.add(sectionPoll);
        	sectionCollection.add(sectionCountdown);
            sectionCollection.add(sectionNews);
            sectionCollection.add(sectionTicker);

        	var sectionCollectionView = new SectionCollectionView({ collection: sectionCollection });

        	this.$el.html( sectionCollectionView.render().el );

        	return this;
        }

    });

    return ScreenView;
});