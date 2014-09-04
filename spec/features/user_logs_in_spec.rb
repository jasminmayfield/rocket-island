require "spec_helper"
  feature "user logs in" do
    before do
      @user = create(:user)
    end
    scenario "successfully" do
      visit '/'
      within("#log-in") do
        fill_in 'name', :with => @user.name
      end
      click_button 'Sign in'
      expect(page).to have_content 'Welcome'
    end
  end




# it "signs me in" do
#     visit '/sessions/new'
#     within("#session") do
#       fill_in 'Email', :with => 'user@example.com'
#       fill_in 'Password', :with => 'password'
#     end
#     click_button 'Sign in'
#     expect(page).to have_content 'Success'
#   end
