class CreateNoteTitle < ActiveRecord::Migration
  def change
    create_table :note_titles do |t|
      t.string :notebook_id
      t.string :integer
      t.string :title
    end
  end
end
