class RenamePoCTopocInappointment < ActiveRecord::Migration[8.1]
  def change
    rename_column :appointments, :PoC, :poc
  end
end
