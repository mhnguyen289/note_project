Rails.application.routes.draw do
  devise_for :users
   devise_scope :user do
  	 get '/users/sign_out' => 'devise/sessions#destroy' 
end
  get 'welcome/index'
  
  # resources :notebooks do
  #   resources :notes
  # end
  resources :users 
  resources :notes
  resources :notebooks
  
  
  authenticated :user do
  	root 'notes#new', as: "authenticated_root"
  end

resources :notebooks do 
  resources :notes, only: [:show]
end

  root 'welcome#index'
end