Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # devise_for :users
  get 'hello_world', to: 'hello_world#index'
  root 'appointments#index'
  resources :appointments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
