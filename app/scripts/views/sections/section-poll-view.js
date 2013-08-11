/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/section-view',

], function ($, _, Backbone, JST, SectionView) {
    'use strict';

    var SectionPollView = SectionView.extend({
        
        template: JST['app/scripts/templates/sections/section-poll.ejs']

    });

    return SectionPollView;
});