class CreateFacts < ActiveRecord::Migration[5.2]
  def change
    create_table :facts do |t|
      t.references :topic, foreign_key: true
      t.string :quote
      t.string :author, default: "The Most Interesting Man in the World"

      t.timestamps
    end
  end
end
