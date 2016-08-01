class CreateNoteNotebooks < ActiveRecord::Migration
  def change
    create_table :note_notebooks do |t|
      t.references :note, index: true, foreign_key: true 
      t.references :notebook, index: true, foreign_key: true, uniq: true
    end
  end
end
