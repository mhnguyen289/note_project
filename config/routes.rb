Rails.application.routes.draw do
  devise_for :users
   devise_scope :user do
  	 get '/users/sign_out' => 'devise/sessions#destroy' 
end
  get 'welcome/index'
  

  resources :users 
  resources :notes
  resources :notebooks
  
  
  authenticated :user do
  	root 'notebooks#index', as: "authenticated_root"
  end

  root 'welcome#index'
end


# get '/admin/stats', to: 'stats#index'
# get '/admin/authors/new', to: 'authors#new'
# get '/admin/authors/delete', to: 'authors#delete'
# get '/admin/authors/create', to: 'authors#create'
# get '/admin/comments/moderate', to: 'comments#moderate'