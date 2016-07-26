class AddColumnsToNotebooks < ActiveRecord::Migration
  def change
    add_column :notebooks, :user_id, :integer
    add_column :notebooks, :notebook_id, :integer
  end
end
