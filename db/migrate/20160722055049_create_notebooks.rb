class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :notebook_title
      t.string :notebook_content
      t.integer :user_id
      
      
      
    end
  end
end
