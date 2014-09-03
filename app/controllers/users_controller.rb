get "/users" do
  json User.all
end

post "/users" do
  user = User.new(user_params)
  if user.save
    json user: user
  else
    status 400
  end
end

put "/users/:id" do
  user = set_user
  if user.update(user_params)
    json user: user
  else
    status 400
  end
end

delete "/users/:id" do
  user = set_user
  if user.destroy
    status 200
  else
    status 400
  end
end

def user_params
  params[:user]
end

def set_user
  User.find(params[:id])
end
