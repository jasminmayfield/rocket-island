require "spec_helper"

RSpec.describe Note do
  it { should belong_to(:user) }
  it { should validate_presence_of(:user) }
  it { should validate_presence_of(:content) }
end
