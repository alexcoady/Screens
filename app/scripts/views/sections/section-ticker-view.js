/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/sections/section-view',
    'collections/section-ticker-message-collection',
    'views/sections/ticker/section-ticker-message-collection-view',

], function ($, _, Backbone, JST, SectionView, TickerMessageCollection, TickerMessageCollectionView) {
    'use strict';

    var SectionTickerView = SectionView.extend({
        
        template: JST['app/scripts/templates/sections/section-ticker.ejs'],

        collection: undefined,
        collectionView: undefined,

        initialize: function initializeFn () {

            var that = SectionView.prototype.initialize.apply(this, arguments);

        },

        render: function renderFn () {

            var that = SectionView.prototype.render.apply(this, arguments);

                // Render the collection out here
                this.tickerMessageCollection = TickerMessageCollection.getInstance();
                this.collectionView = new TickerMessageCollectionView({ collection: this.tickerMessageCollection });
                var $content = that.$('#ticker-wrap');
                $content.html( this.collectionView.render().el );

            return that;
        },

        getGoing: function getGoingFn () {

            console.log(this.collectionView);
        }

    });

    return SectionTickerView;
});