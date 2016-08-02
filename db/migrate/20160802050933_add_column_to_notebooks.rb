class AddColumnToNotebooks < ActiveRecord::Migration
  def change
    add_column :notebooks, :note_id, :integer
  end
end
