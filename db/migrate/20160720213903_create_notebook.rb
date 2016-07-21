class CreateNotebook < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.integer :note_id
      t.integer :user_id
      t.string :title
    end
  end
end
