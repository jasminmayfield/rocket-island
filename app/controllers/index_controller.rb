get "/" do
  @user = User.find_by_name(session[:user])
  erb :index
end

post "/sign-in" do
  @user = User.find_by_name(params[:name])
  session[:user] = @user.name if @user

  redirect to '/'
end
