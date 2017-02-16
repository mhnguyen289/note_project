Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
   devise_scope :user do
  	 get '/users/sign_out' => 'devise/sessions#destroy' 
end
  get 'welcome/index'

  get '/api/notes', to: 'notes#api_index' 
  get '/api/notes/:id', to: 'notes#api_show'

  

  resources :users 
  resources :notes
  resources :notebooks do
    resources :notes
  end
  
  
  authenticated :user do
  	root 'notebooks#index', as: "authenticated_root"
  end

  root 'welcome#index'
end