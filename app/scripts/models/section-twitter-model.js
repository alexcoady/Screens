/*global define*/

define([
    'underscore',
    'backbone',
    'models/section-model',
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
        }

    });

    return SectionTwitterModel;
});