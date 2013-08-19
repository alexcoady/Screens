/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var TwitterUserView = Backbone.View.extend({

        template: JST['app/scripts/templates/sections/twitter/twitter-user.ejs'],

        initialize: function () {

        	this.model.on("change", this.render, this);
        },

        render: function () {

        	var template = this.template( this.model.toJSON() );
        	this.$el.html( template );

        	return this;
        }
        
    });

    return TwitterUserView;
});