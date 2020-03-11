# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

microsoft = Employer.create(name: "Microsoft", location: "Kuala Lumpur", field: "Information Technology", about: Faker::Lorem::paragraph(sentence_count: 3))
microsoft.jobposts.create(position: "Data Analyst", category: "Information Technology", jobtype: "Full-time", location: "KLCC, Kuala Lumpur", description: Faker::Lorem::paragraph(sentence_count: 3))
microsoft.jobposts.create(position: "Software Engineer", category: "Information Technology", jobtype: "Full-time", location: "KLCC, Kuala Lumpur", description: Faker::Lorem::paragraph(sentence_count: 3))
microsoft.jobposts.create(position: "Data Center Engineer", category: "Information Technology", jobtype: "Full-time", location: "KLCC, Kuala Lumpur", description: Faker::Lorem::paragraph(sentence_count: 3))
microsoft.jobposts.create(position: "OS Engineer", category: "Information Technology", jobtype: "Full-time", location: "KLCC, Kuala Lumpur", description: Faker::Lorem::paragraph(sentence_count: 3))

5.times do
    user = User.create(name: Faker::Name.name, email: Faker::Internet.email)

    5.times do
        user.posts.create(title: Faker::Lorem.sentence(word_count:3), body: Faker::Lorem::paragraph(sentence_count: 3))
    end

end