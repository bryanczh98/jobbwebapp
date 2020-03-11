class Mutations::CreateJobpost < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :position, String, required: true
    argument :category, String, required: true
    argument :jobtype, String, required: true
    argument :location, String, required: true
    argument :description, String, required:true

    field :jobpost, Types::JobpostType, null: false
    field :errors, [String], null: false


    def resolve(id:, position:, category:, jobtype:, location:, description:)
        # employer = Employer.find_by(name: name)
        # employerid = employer.id

        jobpost = Jobpost.new(employer_id: id, position: position, category: category, jobtype: jobtype, location: location, description: description)

        if jobpost.save
        {
            jobpost: jobpost,
            errors: []
        }
        else
        {
            jobpost: nil,
            errors: jobpost.errors.full_messages
        }
        end
    end
end