App.Client = DS.Model.extend({
	name: DS.attr('string'),
	created: DS.attr('string'),
	updated: DS.attr('string'),
	programmes: DS.hasMany('programme',{async:true})
});