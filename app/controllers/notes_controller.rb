get "/users/:user_id/notes" do
  user = set_notes_user
  @notes = user.notes
  erb :notes, layout: false
end

post "/users/:user_id/notes" do
  user = set_notes_user
  note = user.build_note(note_params)
  if note.save
    json note: note
  else
    status 400
  end
end

def note_params
  params[:note]
end

def set_notes_user
  User.find(params[:user_id])
end
