/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/section-view',

    'views/sections/section-twitter-view',
    'views/sections/section-countdown-view',
    'views/sections/section-news-view',
    'views/sections/section-dates-view',
    'views/sections/section-team-view',
    'views/sections/section-poll-view',
    'views/sections/section-ticker-view',
], function ($, _, Backbone, JST, SectionView, TwitterView, CountdownView, NewsView, DatesView, TeamView, PollView, TickerView) {
    'use strict';

    var SectionCollectionView = Backbone.View.extend({

        className: "section-collection",

        render: function renderFn() {

        	var that = this;

        	this.collection.each(function (section) {

        		that.renderOne(section);
        	});

        	return this;
        },

        renderOne: function renderOneFn ( section ) {

        	var view;

        	switch ( section.get("type") ) {

        		case "twitter": {

        			view = new TwitterView({ model: section });
        			break;
        		}
        		case "countdown": {

        			view = new CountdownView({ model: section });
        			break;
        		}
        		case "news": {

        			view = new NewsView({ model: section });
        			break;
        		}
        		case "dates": {

        			view = new DatesView({ model: section });
        			break;
        		}
        		case "team": {

        			view = new TeamView({ model: section });
        			break;
        		}
        		case "poll": {

        			view = new PollView({ model: section });
        			break;
        		}
                case "ticker": {

                    view = new TickerView({ model: section });
                    break;
                }
        		default: {

        			view = new SectionView({ model: section });
        		}
        	}

        	this.$el.append( view.render().el );

        	this.log( view.render().el );

        	return this;
        }

    });

    return SectionCollectionView;
});