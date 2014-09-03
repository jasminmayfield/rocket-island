require "spec_helper"

RSpec.describe "Notes Controller" do

  describe "get /users/:user_id/notes" do

    let(:note_1) { Note.new(content: "Contacted by email") }
    let(:note_2) { Note.new(content: "Contacted by phone") }
    let(:notes)  { [ note_1, note_2 ] }
    let(:user)   { double("user", notes: notes) }

    before { allow(User).to receive(:find).and_return(user) }

    it "returns empty divs if there are no notes" do
      allow(user).to receive(:notes).and_return([])
      get "/users/8/notes"
      expect(last_response.body).to match(/class=.notes./)
    end

    describe "returns a list of notes in JSON" do

      before do
        allow(note_1).to receive(:id).and_return(33)
        allow(note_2).to receive(:id).and_return(45)
        get "/users/8/notes"
      end

      it "returns a notes" do
        expect(last_response.body).to match(/class=.note./)
      end

      describe "returns all the notes for a user" do
        before do
        end

        it "renders the first note" do
          expect(last_response.body).to match(/data-id=.33./)
        end

        it "renders the last note" do
          expect(last_response.body).to match(/data-id=.45./)
        end
      end

      it "returns the contents of notes" do
        expect(last_response.body).to include("Contacted by email")
      end
    end

  end

  describe "post /users/:user_id/notes" do

    let(:valid_params) { { "note" => { "content" => "Contacted" } } }
    let(:note) { Note.new(valid_params["note"]) }
    let(:user) { double("user", build_note: note) }

    before { allow(User).to receive(:find).and_return(user) }

    it "passes the parameters to the new note" do
      expect(user).to receive(:build_note).with(valid_params["note"])
      post "/users/8/notes", valid_params
    end

    it "returns the user data if saved successfully" do
      allow(note).to receive(:save).and_return(true)
      post "/users/8/notes", valid_params
      note_json = last_json["note"]
      expect(note_json["content"]).to eq("Contacted")
    end

    it "responds with a bad request if not saved successfully" do
      allow(user).to receive(:save).and_return(false)
      post "/users/8/notes", valid_params
      expect(last_response).to be_bad_request
    end

  end

end
