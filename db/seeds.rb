# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
notebooks = Notebook.create(
	[{title: 'Sample Notebook', note_id: 1 }, {title: 'Books to read', note_id: 2}])

notes = Note.create(
	[{title: 'Sample Notebook Title!', content: "This is my titles content!", notebook_id: 1}, {title: 'Book Title!', content: "This is my book titles content!", notebook_id: 2}])