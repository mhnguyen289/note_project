Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
   devise_scope :user do
  	 get '/users/sign_out' => 'devise/sessions#destroy' 
end
  get 'welcome/index'
  get '/api/notebooks', to: 'notebooks#api_index' 
  get '/api/notebooks/:id', to: 'notebooks#api_show'
  get '/api/notes', to: 'notes#api_index' 
  get '/api/notes/:id', to: 'notes#api_show'
  
  # route defined to have api info go to specific parameter
  get 'api/notes/:id/next', to: 'notes#api_next'
  get 'api/notes/:id/prev', to: 'notes#api_prev'
  
  resources :notes do
    resources :comments
  end
  resources :notebooks do
    resources :notes
  end
  
  resources :users 
  resources :notes
  resources :comments
  
  authenticated :user do
  	root 'notebooks#index', as: "authenticated_root"
  end

  root 'welcome#index'
end

# Jquery Flow 
# 1. Defined route for #api_show action
# 2. Notes_controller - define api_show to find note and render json 
# => use active model serializer. It describes which attr and relationships should be serialized into JSON
# => it will render them!
# 3. define what each note/comment will do in prototype so you can add an event listener
