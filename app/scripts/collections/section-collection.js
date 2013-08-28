/*global define*/

define([
    'underscore',
    'backbone',
    'models/section-model',
], function (_, Backbone, SectionModel) {
    'use strict';

    var SectionCollection = Backbone.Collection.extend({
        
        model: SectionModel,
    },
    {
    	_instance: undefined,

    	getInstance: function getInstanceFn () {

    		if ( this._instance === undefined ) {

    			this._instance = new SectionCollection();
    		}

    		return this._instance;
    	}
    });

    return SectionCollection;
});