class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :index
  # before_action :authenticate_user!, except: [:index, :show] 

def index
	@notebooks = Notebook.all
end


end
