/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/sections/section-view',

], function ($, _, Backbone, JST, SectionView) {
    'use strict';

    var SectionTeamView = SectionView.extend({
        
        template: JST['app/scripts/templates/sections/section-team.ejs']

    });

    return SectionTeamView;
});