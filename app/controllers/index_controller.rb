get "/" do
  @user = User.find_by_name(session[:user])
  if @message = session[:message]
    session[:message] = nil
  end
     erb :index
end

post "/sign-in" do
  @user = User.find_by_name(params[:name])
  puts @user
  if @user
    session[:user] = @user.name
    # @points = @user.points
    puts "in the sign in post method"
    json user: @user
  else
    puts "else section"
    session[:message] = "invalid user name"
    status 401
  end
  # redirect to '/'
end

get "/sign-out" do
  session[:user] = nil
  erb :index
end
