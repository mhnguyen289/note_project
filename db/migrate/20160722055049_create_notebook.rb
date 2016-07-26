class CreateNotebook < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :title, unique: true
    end
  end
end
