Rails.application.routes.draw do

  devise_for :users
  resources :posts
  resources :users

  root 'application#angular'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
