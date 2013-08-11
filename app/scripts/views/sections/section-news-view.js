/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/section-view',

], function ($, _, Backbone, JST, SectionView) {
    'use strict';

    var SectionNewsView = SectionView.extend({
        
        template: JST['app/scripts/templates/sections/section-news.ejs']

    });

    return SectionNewsView;
});