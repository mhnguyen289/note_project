Rails.application.routes.draw do
  devise_for :users

  get 'welcome/index'
  resources :users
  resources :notes
  resources :notebooks

  authenticated :user do
  	root 'notes#new', as: "authenticated_root"
  end


  root 'welcome#index'

end
