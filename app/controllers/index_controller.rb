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
  else
    puts "else section"
    session[:message] = "invalid user name"
  end
  redirect to '/'
end

get "/sign-out" do
  session[:user] = nil
  erb :index
end
