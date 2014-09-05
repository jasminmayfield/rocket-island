get "/" do
  @user = User.find_by_name(session[:user])
  if @message = session[:message]
    session[:message] = nil
  end
     erb :index
end

post "/sign-in" do
  @user = User.find_by_name(params[:name])
  if @user
    session[:user] = @user.name
    json user: @user
  else
    session[:message] = "invalid user name"
    status 401
  end
end

get "/sign-out" do
  session[:user] = nil
  redirect '/'
end

put "/user/:name" do
  @user = User.find_by_name(session[:user])
  @user.points += params[:points].to_i
  @user.save
  json points: @user.points
end
