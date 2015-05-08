App.Programme = DS.Model.extend({
	name: DS.attr('string'),
	created: DS.attr('string'),
	updated: DS.attr('string'),
	client: DS.belongsTo('client',{async:true})
});