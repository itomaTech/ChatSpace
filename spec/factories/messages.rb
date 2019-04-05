FactoryBot.define do
  factory :message do
    body      {Faker::Lorem.sentence}
    image     {File.open("#{Rails.root}/public/uploads/message/image/dummy.png")}
    user
    group
  end
end
