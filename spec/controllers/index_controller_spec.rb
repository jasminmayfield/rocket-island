require "spec_helper"

RSpec.describe "Index Controller" do

  describe "get /" do

    before do
      get "/"
    end

    it "returns an ok response" do
      expect(last_response).to be_ok
    end

    it "gives us a div to hang our dynamic content off of" do
      expect(last_response.body).to include('<div id="crm">')
    end
  end

  describe "post /sign-in" do

    before do
      @user = create(:user)
    end


    context "with valid details" do
      before do
        post '/sign-in', name: @user.name
      end

      it "redirects you to '/'" do
        expect(last_response).to be_redirect
        follow_redirect!
        expect(last_request.path).to be == '/'
      end

      it "saves the user id in a session" do
        expect(session[:user]).to eq(@user.name)
      end
    end

    context "with invalid details" do

      before do
        post '/sign-in', name: "nan"
      end

      it "and no session is set" do
        expect(session[:user]).to be_nil
      end

    end

  end


end
