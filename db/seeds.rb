require "faker"

User.destroy_all
Note.destroy_all

30.times do
  User.create(name: Faker::Name.name, email: Faker::Internet.email, phone_number: Faker::PhoneNumber.phone_number)
end

users = User.all

120.times do
  user = users.sample
  length = Random.rand(2) + 1
  content = Faker::Lorem.paragraphs(length).join("\n\n")
  user.notes.create(content: content)
end
