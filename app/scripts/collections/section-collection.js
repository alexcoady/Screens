/*global define*/

define([
    'underscore',
    'backbone',
    'models/section-model',
], function (_, Backbone, SectionModel) {
    'use strict';

    var SectionCollection = Backbone.Collection.extend({
        
        model: SectionModel,

    });

    return SectionCollection;
});