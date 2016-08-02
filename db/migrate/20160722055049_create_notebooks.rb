class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :title
      t.integer :user_id
      
      
      
    end
  end
end
