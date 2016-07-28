Rails.application.routes.draw do
  devise_for :users
   devise_scope :user do
  	 get '/users/sign_out' => 'devise/sessions#destroy' 
end

  get 'welcome/index'
  resources :users 
  resources :notebooks 
  
  resources :notes do
    resources :note_titles

  end

  authenticated :user do
  	root 'notes#new', as: "authenticated_root"
  end

  root 'welcome#index'
end

