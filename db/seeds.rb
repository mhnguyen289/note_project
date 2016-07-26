# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
notebooks = Notebook.create(
	[{title: 'Sample Notebook'}, {title: 'Books to read'}, {title: 'My Recipes'}])

notes = Note.create(
	[{title: 'The title of my Note!', content: "Mustache shoreditch roof party, blue bottle pork belly franzen godard mixtape. Small batch celiac banjo organic semiotics. Poutine meditation kickstarter, vinyl cred deep v hammock pickled master cleanse. Cardigan occupy pickled pabst, pop-up listicle wayfarers VHS sartorial. Beard forage godard art party biodiesel hammock, polaroid letterpress celiac messenger bag franzen pork belly lomo kale chips. Irony XOXO quinoa pabst, retro blue bottle bitters biodiesel cold-pressed roof party kombucha. Chambray celiac letterpress crucifix distillery, craft beer viral blog ugh synth 8-bit echo park art party locavore.

"}])