Rails.application.routes.draw do
  devise_for :users
   devise_scope :user do
  	 get '/users/sign_out' => 'devise/sessions#destroy' 
end

<<<<<<< HEAD
  
  resources :notebooks do
    resources :notes
end    
=======
  get 'welcome/index'
  resources :users 
  resources :notebooks 
  resources :notes
    

  
>>>>>>> 7d7463441de269ec5350e01b3bf568b038f93b70

get 'welcome/index'
  resources :users 
  resources :notes
  
  authenticated :user do
  	root 'notes#new', as: "authenticated_root"
  end

  root 'welcome#index'
end
