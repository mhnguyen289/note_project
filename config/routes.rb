Rails.application.routes.draw do
  devise_for :users
   devise_scope :user do
  	 get '/users/sign_out' => 'devise/sessions#destroy' 
end
  get 'welcome/index'
  
  resources :notebooks 
  resources :users 
  resources :notes
  
  authenticated :user do
  	root 'notes#index', as: "authenticated_root"
  end

  root 'welcome#index'
end