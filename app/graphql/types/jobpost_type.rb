module Types
    class JobpostType < Types::BaseObject
      field :id, Integer, null: false
      field :employer_id, ID, null:false
      field :position, String, null: true
      field :category, String, null: true
      field :jobtype, String, null: true
      field :location, String, null: true
      field :description, String, null: true
      field :employer, Types::EmployerType, null: false

      def employer_name
        Employer.find_by(id: employer_id)
      end
    end
  end
  