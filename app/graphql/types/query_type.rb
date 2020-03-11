module Types
  class QueryType < Types::BaseObject
    # /users
    field :users, [Types::UserType], null: false

    def users
      User.all
    end

    field :user, Types::UserType, null: false do
      argument :id, ID, required: true
    end

    def user(id:)
      User.find(id)
    end

    # /jobposts
    field :jobposts, [Types::JobpostType], null: false

    def jobposts
      Jobpost.all
    end

    field :jobpost, Types::JobpostType, null: false do
      argument :id, Integer, required: true
    end

    def jobpost(id:)
      Jobpost.find(id)
    end

    field :search_jobs, [Types::JobpostType], null: false do
      argument :position, String, required: true
    end

    def search_jobs(position:)
      Jobpost.where(position: position).take(5)
    end

    # /employers
    field :employers, [Types::EmployerType], null: false

    def employers
      Employer.all
    end

    field :employer, Types::EmployerType, null:false do
      argument :id, ID, required: true
    end

    def getemployer(id:)
      Employer.find(id)
    end
  end
end
