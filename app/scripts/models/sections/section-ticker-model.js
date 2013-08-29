/*global define*/

define([
    'underscore',
    'backbone',
    'models/sections/section-model',
], function (_, Backbone, SectionModel) {
    'use strict';

    var SectionTickerModel = SectionModel.extend({
        
        defaults:{
        },

        

        initialize: function () {

        	// Call init of parent model
        	SectionModel.prototype.initialize.apply(this, arguments);
        	this.fetch();
        }

    });

    return SectionTickerModel;
});