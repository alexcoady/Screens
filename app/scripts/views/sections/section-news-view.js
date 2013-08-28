/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/sections/section-view',

], function ($, _, Backbone, JST, SectionView) {
    'use strict';

    var SectionNewsView = SectionView.extend({
        
        template: JST['app/scripts/templates/sections/section-news.ejs'],

        render: function renderFn () {

            var that = SectionView.prototype.render.apply(this, arguments);

            return that;
        },

        getGoing: function getGoingFn () {

            var that = SectionView.prototype.render.apply(this, arguments);

            var $scroll = that.$('.entry-content .scroll'),
                scrollHeight = $scroll.height(),
                $entryContent = that.$('.entry-content'),
                entryContentHeight = $entryContent.height();

            $scroll.css({
                "height": scrollHeight + "px",
                "top": (scrollHeight - entryContentHeight) + "px"
            });

            return that;
        }
    });

    return SectionNewsView;
});