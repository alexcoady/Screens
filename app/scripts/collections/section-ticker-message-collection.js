/*global define*/

define([
    'underscore',
    'backbone',
    'models/sections/section-ticker-message-model'
], function (_, Backbone, SectionTickerMessageModel) {
    'use strict';

    var SectionTickerMessageCollection = Backbone.Collection.extend({
        
        model: SectionTickerMessageModel,

        url: "scripts/json/example-ticker.json",

        initialize: function initializeFn () {

        	this.fetch();
        }
    },
    {
    	_instance: undefined,

    	getInstance: function getInstanceFn () {

    		if (this._instance === undefined) {

    			this._instance = new SectionTickerMessageCollection();
    		}

    		return this._instance;
    	}
    });

    return SectionTickerMessageCollection;
});