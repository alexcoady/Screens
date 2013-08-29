/*global define*/

define([
    'underscore',
    'backbone',
    'models/sections/section-model',
], function (_, Backbone, SectionModel) {
    'use strict';

    var SectionTwitterModel = SectionModel.extend({
        
        defaults:{
        },

        url: "scripts/json/example-twitter.json",

        initialize: function () {

        	// Call init of parent model
        	SectionModel.prototype.initialize.apply(this, arguments);
        	this.fetch();

        	this.on("change:status", this.setPrettyTweet, this);
        },

        /*
        *	@title setPrettyTweetFn
        *	---------------------------------------------------
        *	Replaces ugly links with their display names
        *	---------------------------------------------------
        *	@param null
        *	@return (Twitter status object) status
        */
        setPrettyTweet: function setPrettyTweetFn () {

        	var status = this.get("status"),
        			links = status.entities.urls,
        			links_count = links.length,
        			links_i = 0;

        		for (links_i; links_i < links_count; links_i += 1) {

        			status.text = status.text.replace( links[links_i].url, '<a class="tweet__link" href="'+ links[links_i].expanded_url +'">' + links[links_i].display_url + '</a>' );
        		}

        		this.set("status", status);

        		return status;
        }

    });

    return SectionTwitterModel;
});