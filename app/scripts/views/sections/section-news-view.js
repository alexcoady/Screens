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

        animationDelay: 4000,
        animationSpeedPerLine: 1000,
        
        template: JST['app/scripts/templates/sections/section-news.ejs'],

        render: function renderFn () {

            var that = SectionView.prototype.render.apply(this, arguments);

            return that;
        },

        getGoing: function getGoingFn () {

            var that = SectionView.prototype.render.apply(this, arguments);

            var $entryContent = that.$('.entry-content'),
                entryContentHeight = $entryContent.height(),
                $scroll = that.$('.entry-content .scroll'),
                scrollHeight = $scroll.height(),
                lineHeight = that.$('.entry-content p').css("line-height");

            lineHeight = Math.round(lineHeight.substring(0, lineHeight.length - 2));

            $scroll.delay(this.animationDelay).animate({
                "top": -(scrollHeight - entryContentHeight) + "px"
            },
            ((scrollHeight / lineHeight) * this.animationSpeedPerLine),
            "linear"
            );

            return that;
        }
    });

    return SectionNewsView;
});