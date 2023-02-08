Rails.application.routes.draw do
  resources :steps, only: [:index]
  resources :trackers
  resources :exercises, only: [:index, :show]
  resources :users, only: [:index]


  get "/me", to: "users#show"
  post "/signup", to: "users#login"

  # get "/user_logged_in", to: "sessions#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # resources :planets, only: [:index] as an example of using only in routes for specification
end
