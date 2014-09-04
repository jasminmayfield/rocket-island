require 'rubygems'

# All our specs should require 'spec_helper' (this file)

# If RACK_ENV isn't set, set it to 'test'.  Sinatra defaults to development,
# so we have to override that unless we want to set RACK_ENV=test from the
# command line when we run rake spec.  That's tedious, so do it here.
ENV['RACK_ENV'] ||= 'test'

require File.expand_path("../../config/environment", __FILE__)
require 'shoulda-matchers'
require 'rack/test'
require 'capybara'
require 'capybara/rspec'
require 'factory_girl'
require 'faker'

require_relative 'support/request_helpers'
require_relative 'factories/user'

RSpec.configure do |config|
  config.include Rack::Test::Methods
  config.include FactoryGirl::Syntax::Methods
  config.include Requests::JsonHelpers

  config.before do
    User.destroy_all

  end
end

def session
  last_request.env['rack.session']
end

def app
  Sinatra::Application
end

Capybara.app = app
