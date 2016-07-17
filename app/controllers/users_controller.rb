class UsersController < ApplicationController
	before_action :set_user, only: [:edit, :update]

	def index
	end

	def edit
	end

	def show 
		@users = User.all
	end

	def update
		if @user.update(user_params)
       flash[:notice] = "User profile successfully updated"
       redirect_to @user
     else
       flash[:notice] = "Oops something went wrong. Please try again."
       render :edit 
     end
	end

	private

	def user_params
		    params.require(:user).permit(:username, :age, :hometown, :info, :email, :password, :password_confirmation) 
	end

	def set_user
		@user = current_user
	end


end