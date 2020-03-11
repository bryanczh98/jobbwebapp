class CreateEmployers < ActiveRecord::Migration[6.0]
  def change
    create_table :employers do |t|
      t.string :name
      t.string :location
      t.string :field
      t.string :about

      t.timestamps
    end
  end
end
