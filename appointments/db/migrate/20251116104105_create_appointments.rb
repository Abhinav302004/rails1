class CreateAppointments < ActiveRecord::Migration[8.1]
  def change
    create_table :appointments do |t|
      t.string :name
      t.string :PoC
      t.date :date
      t.string :time

      t.timestamps
    end
  end
end
