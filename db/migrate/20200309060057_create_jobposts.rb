class CreateJobposts < ActiveRecord::Migration[6.0]
  def change
    create_table :jobposts do |t|
      t.belongs_to :employer, null: false, foreign_key: true
      t.string :position
      t.string :category
      t.string :jobtype
      t.string :location
      t.string :description

      t.timestamps
    end
  end
end
