Rails.application.routes.draw do
  devise_for :users
   devise_scope :user do
  	 get '/users/sign_out' => 'devise/sessions#destroy' 
end
  get 'welcome/index'
  
  resources :notebooks do
    resources :notes
  end
  resources :users 
  
  
  authenticated :user do
  	root 'notebooks#index', as: "authenticated_root"
  end


  root 'welcome#index'
end