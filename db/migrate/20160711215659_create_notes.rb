class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :note_title
      t.text :note_content
      t.integer :user_id
      t.references :notebook, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
