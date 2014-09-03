require "spec_helper"

RSpec.describe User do
  it { should have_many(:notes) }
  it { should validate_presence_of(:name) }
end
