class AddColumnToNotebooks < ActiveRecord::Migration
  def change
    add_column :notebooks, :notebook_id, :integer
  end
end
