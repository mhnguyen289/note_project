class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title, unique: true
      t.text :content

      t.timestamps null: false
    end
  end
end
