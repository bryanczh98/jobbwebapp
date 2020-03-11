module Types
    class EmployerType < Types::BaseObject
      field :id, ID, null: false
      field :name, String, null: true
      field :location, String, null: true
      field :field, String, null: true
      field :jobposts, [Types::JobpostType], null: true
      field :jobposts_count, Integer, null: true
  
      def jobposts_count
        object.jobposts.size
      end
    end
  end
  