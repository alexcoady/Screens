/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/sections/section-view',
    'models/twitter-user-model',
    'views/sections/twitter/twitter-user-view',

], function ($, _, Backbone, JST, SectionView, TwitterUserModel, TwitterUserView) {
    'use strict';

    var SectionTwitterView = SectionView.extend({
        
        template: JST['app/scripts/templates/sections/section-twitter.ejs'],

        initialize: function initializeFn () {

            SectionView.prototype.initialize.apply(this, arguments);
        },

        render: function renderFn () {

            var that = SectionView.prototype.render.apply(this, arguments);

            var twitterUser = new TwitterUserModel(),
                twitterUserView = new TwitterUserView({ 
                    model: twitterUser, 
                    $el: that.$('.twitter__user') 
                });
            
            twitterUser.fetch({
                "success": function () {

                    that.$('.twitter__user').html( twitterUserView.render().el );
                }
            });




            


            return that;
        }

    });

    return SectionTwitterView;
});