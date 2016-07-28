# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
notebooks = Notebook.create(
	[{title: 'Sample Notebook', id: 2}, {title: 'Books to read', id: 3}])

notes = Note.create(
	[{title: 'The title of my Note!', content: "This is my content"}])