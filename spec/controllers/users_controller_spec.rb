require "spec_helper"

RSpec.describe "Users Controller" do

  describe "get /users" do

    it "returns an empty list if there are no users" do
      allow(User).to receive(:all).and_return([])
      get "/users"
      expect(last_json).to eq([])
    end

    describe "returns a list of users in JSON" do

      let(:user_1) { User.new(name: "Sam") }
      let(:user_2) { User.new(name: "Darcy") }
      let(:users) { [ user_1, user_2 ] }

      before do
        allow(User).to receive(:all).and_return(users)
        get "/users"
        @first_user = last_json.first
      end

      it "returns an array" do
        expect(last_json).to be_a(Array)
      end

      it "returns all the users" do
        expect(last_json.length).to eq(users.length)
      end

      it "has the names for a name for a user" do
        expect(@first_user["name"]).to eq("Sam")
      end

    end

  end

  describe "post /users" do

    let(:user)         { User.new }
    let(:valid_params) { { "user" => { "name" => "Sam" } } }

    it "passes the paramters to the new user" do
      expect(User).to receive(:new).with(valid_params["user"]).and_return(user)
      post "/users", valid_params
    end

    it "returns the user data if saved successfully" do
      allow(user).to receive(:save).and_return(true)
      post "/users", valid_params
      user_json = last_json["user"]
      expect(user_json["name"]).to eq("Sam")
    end

    it "responds with a bad request if not saved successfully" do
      allow(User).to receive(:new).and_return(user)
      allow(user).to receive(:save).and_return(false)
      post "/users", valid_params
      expect(last_response).to be_bad_request
    end

  end

  describe "put /users/:id" do

    let(:user)         { User.new }
    let(:valid_params) { { "user" => { "name" => "Sam" } } }

    it "finds the right user" do
      expect(User).to receive(:find).with("8").and_return(user)
      put "/users/8", valid_params
    end

    it "updates the user data" do
      expected_data = { "name" => "Sam" }
      allow(User).to receive(:find).and_return(user)
      expect(user).to receive(:update).with(expected_data)
      put "/users/8", valid_params
    end

    it "returns update user for a successful update" do
      allow(User).to receive(:find).and_return(user)
      put "/users/8", valid_params
      user_json = last_json["user"]
      expect(user_json["name"]).to eq("Sam")
    end

    it "returns bad request for an unsuccessful update" do
      allow(User).to receive(:find).and_return(user)
      allow(user).to receive(:update).and_return(false)
      put "/users/8", valid_params
      expect(last_response).to be_bad_request
    end

  end

  describe "delete /users/:id" do

    let(:user) { User.new }

    it "finds the right user" do
      expect(User).to receive(:find).with("8").and_return(user)
      delete "/users/8"
    end

    it "returns a successful status if the user is destroyed" do
      allow(User).to receive(:find).and_return(user)
      allow(user).to receive(:destroy).and_return(true)
      delete "/users/8"
      expect(last_response).to be_ok
    end

    it "returns a bad request status if the user is not destroyed" do
      allow(User).to receive(:find).and_return(user)
      allow(user).to receive(:destroy).and_return(false)
      delete "/users/8"
      expect(last_response).to be_bad_request
    end

  end

end
